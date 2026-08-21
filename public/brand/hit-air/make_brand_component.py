#!/usr/bin/env python3
"""
Genera el componente React de marca oficial Hit-Air a partir de los SVG
limpios, optimizando la precision de coordenadas.

Salidas:
  - repo/public/brand/hit-air/clean/hitair-icon.svg   (icono suelto)
  - repo/src/modules/ekivibes/brand/hitair-logo.tsx   (componentes React)
"""
import re, os
from svgelements import Path

CLEAN = "repo/public/brand/hit-air/clean"
RED = "rgb(92.939758%, 10.978699%, 14.118958%)"
WHITE = "rgb(100%, 100%, 100%)"
PATH_RE = re.compile(r'<path\b[^>]*?/>', re.S)
FILL_RE = re.compile(r'fill="([^"]+)"')
D_RE = re.compile(r'\sd="([^"]+)"')
NUM_RE = re.compile(r'-?\d+\.\d+')


def shrink(d, nd=2):
    """Reduce la precision decimal de los comandos del path."""
    return NUM_RE.sub(lambda m: f"{float(m.group()):.{nd}f}".rstrip("0").rstrip("."), d)


def read(name):
    src = open(os.path.join(CLEAN, name)).read()
    vb = re.search(r'viewBox="([^"]+)"', src).group(1)
    out = []
    for tag in PATH_RE.findall(src):
        f, d = FILL_RE.search(tag), D_RE.search(tag)
        if f and d:
            out.append((f.group(1), d.group(1)))
    return vb, out


def extract_icon():
    """El icono oficial es el 2do path de mayor area en el logotipo apilado."""
    src = open(os.path.join(CLEAN, "hitair-logo3.svg")).read()
    items = []
    for tag in PATH_RE.findall(src):
        f, d = FILL_RE.search(tag), D_RE.search(tag)
        if not (f and d):
            continue
        try:
            bb = Path(d.group(1)).bbox()
        except Exception:
            continue
        if bb:
            items.append((abs((bb[2]-bb[0])*(bb[3]-bb[1])), f.group(1), d.group(1), bb))
    items.sort(reverse=True, key=lambda r: r[0])
    _, fill, d, bb = items[0]
    p = 0.04
    w, h = bb[2]-bb[0], bb[3]-bb[1]
    x0, y0 = bb[0]-w*p, bb[1]-h*p
    w, h = w*(1+2*p), h*(1+2*p)
    d2 = shrink(d)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" '
           f'viewBox="{x0:.2f} {y0:.2f} {w:.2f} {h:.2f}" role="img" aria-label="hit-air">\n'
           f'  <path fill-rule="nonzero" fill="currentColor" d="{d2}"/>\n</svg>\n')
    open(os.path.join(CLEAN, "hitair-icon.svg"), "w").write(svg)
    return f"{x0:.2f} {y0:.2f} {w:.2f} {h:.2f}", d2


def jsx_paths(items):
    out = []
    for fill, d in items:
        if fill == RED or "hitair-red" in fill:
            col = "var(--ha-red, #ED1C24)"
        elif fill == WHITE or fill == "currentColor":
            col = "currentColor"
        else:
            col = "var(--ha-knockout, #0D0D0F)"
        out.append(f'      <path fillRule="nonzero" fill="{col}" d="{shrink(d)}" />')
    return "\n".join(out)


def main():
    vb1, p1 = read("hitair-logo1.svg")
    vb2, p2 = read("hitair-logo2.svg")
    vb3, p3 = read("hitair-logo3.svg")
    vbi, di = extract_icon()

    tsx = f'''// Marca oficial Hit-Air (Mugen Denko Co., Ltd.)
// Vectores extraidos de los PDF oficiales publicados en:
//   https://www.hit-air.com/for_shop_support/hit-air_logo/
//
// El logotipo usa `currentColor`, asi que hereda el color del contenedor:
// blanco sobre fondo oscuro, negro sobre fondo claro, sin duplicar assets.
// La barra roja usa la variable --ha-red (rojo oficial #ED1C24).
//
// NO alterar las proporciones ni recolorear el logotipo: son marca registrada.

type MarkProps = {{
  height?: number
  className?: string
  title?: string
}}

const base = (h: number) => ({{ height: h, width: "auto" as const }})

/** Logotipo horizontal con barra roja. Uso principal: cabecera. */
export function HitAirLogo({{ height = 40, className = "", title = "hit-air" }}: MarkProps) {{
  return (
    <svg
      className={{className}}
      viewBox="{vb1}"
      style={{base(height)}}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={{title}}
    >
{jsx_paths(p1)}
    </svg>
  )
}}

/** Logotipo horizontal sin barra. Uso: pie de pagina, firmas discretas. */
export function HitAirLogoPlain({{ height = 32, className = "", title = "hit-air" }}: MarkProps) {{
  return (
    <svg
      className={{className}}
      viewBox="{vb2}"
      style={{base(height)}}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={{title}}
    >
{jsx_paths(p2)}
    </svg>
  )
}}

/** Logotipo apilado. Uso: sellos de contenido oficial, badges cuadrados. */
export function HitAirStacked({{ height = 64, className = "", title = "hit-air" }}: MarkProps) {{
  return (
    <svg
      className={{className}}
      viewBox="{vb3}"
      style={{base(height)}}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={{title}}
    >
{jsx_paths(p3)}
    </svg>
  )
}}

/** Solo el simbolo (sin texto). Uso: marcas de agua y fondos decorativos. */
export function HitAirIcon({{ height = 48, className = "", title = "hit-air" }}: MarkProps) {{
  return (
    <svg
      className={{className}}
      viewBox="{vbi}"
      style={{base(height)}}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={{title}}
    >
      <path fillRule="nonzero" fill="currentColor" d="{di}" />
    </svg>
  )
}}

export default HitAirLogo
'''
    dest = "repo/src/modules/ekivibes/brand/hitair-logo.tsx"
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, "w").write(tsx)
    print(f"generado {dest}  ({len(tsx)/1024:.0f}KB)")
    for n, p in [("logo1", p1), ("logo2", p2), ("logo3", p3)]:
        raw = sum(len(d) for _, d in p)
        opt = sum(len(shrink(d)) for _, d in p)
        print(f"  {n}: {raw/1024:.0f}KB -> {opt/1024:.0f}KB  ({100-opt*100//raw}% menos)")


if __name__ == "__main__":
    main()
