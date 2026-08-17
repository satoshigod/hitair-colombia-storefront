// Marca Hit-Air Colombia: escudo de proteccion + rayo de impacto.
// Misma firma de props que el logo original para no romper los usos
// existentes (Nav, Hero, Banner, Footer) que pasan color/height/className.
export default function Logo({
  color = "#D62828",
  height = 46,
  className = "",
}: {
  color?: string
  height?: number
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      style={{ height, width: "auto" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M50 5 L89 20 V47 C89 76 68 92 50 97 C32 92 11 76 11 47 V20 Z"
        stroke={color}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path d="M55 17 L33 55 H46 L41 86 L71 43 H57 Z" fill={color} />
    </svg>
  )
}
