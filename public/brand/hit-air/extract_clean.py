#!/usr/bin/env python3
"""Extrae logotipos Hit-Air limpios (sin placa) desde los SVG oficiales."""
import re, os, sys
from svgelements import Path

RED = "rgb(92.939758%, 10.978699%, 14.118958%)"
WHITE = "rgb(100%, 100%, 100%)"
PATH_RE = re.compile(r'<path\b[^>]*?/>', re.S)
FILL_RE = re.compile(r'fill="([^"]+)"')
D_RE = re.compile(r'\sd="([^"]+)"')

def parse(f):
    out = []
    for tag in PATH_RE.findall(open(f).read()):
        fl, d = FILL_RE.search(tag), D_RE.search(tag)
        if fl and d and fl.group(1) != "none":
            out.append({"fill": fl.group(1), "d": d.group(1)})
    return out

def build(src, dst, pad=0.04):
    info = []
    for i, p in enumerate(parse(src)):
        try: bb = Path(p["d"]).bbox()
        except Exception: bb = None
        if bb: info.append((i, p, bb, abs((bb[2]-bb[0])*(bb[3]-bb[1]))))
    if not info: return
    plate = max(info, key=lambda r: r[3])[0]          # placa = mayor area
    keep = [r for r in info if r[0] != plate]
    x0 = min(r[2][0] for r in keep); y0 = min(r[2][1] for r in keep)
    x1 = max(r[2][2] for r in keep); y1 = max(r[2][3] for r in keep)
    w, h = x1-x0, y1-y0
    x0 -= w*pad; y0 -= h*pad; w *= 1+2*pad; h *= 1+2*pad
    body, stats = [], {"marca":0,"roja":0,"knockout":0}
    for i, p, bb, a in keep:
        if p["fill"] == RED:
            col = "var(--hitair-red, #ED1C24)"; stats["roja"] += 1
        elif p["fill"] == WHITE:
            col = "currentColor"; stats["marca"] += 1
        else:   # texto oscuro sobre barra blanca -> knockout al fondo
            col = "var(--hitair-knockout, #0D0D0F)"; stats["knockout"] += 1
        body.append(f'  <path fill-rule="nonzero" fill="{col}" d="{p["d"]}"/>')
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" '
           f'viewBox="{x0:.3f} {y0:.3f} {w:.3f} {h:.3f}" '
           f'role="img" aria-label="hit-air">\n' + "\n".join(body) + "\n</svg>\n")
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    open(dst, "w").write(svg)
    print(f"  {os.path.basename(dst):22s} {w:.0f}x{h:.0f}  {stats}  {len(svg)/1024:.0f}KB")

if __name__ == "__main__":
    S, D = "repo/public/brand/hit-air/svg", "repo/public/brand/hit-air/clean"
    for s, d in [("hit-air_logo1-bk.svg","hitair-logo1.svg"),
                 ("hit-air_logo2-bk.svg","hitair-logo2.svg"),
                 ("hit-air_logo3-bk.svg","hitair-logo3.svg"),
                 ("hit-air_logo_HR.svg","hitair-logo-hr.svg")]:
        build(os.path.join(S,s), os.path.join(D,d))
