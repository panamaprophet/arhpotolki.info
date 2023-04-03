export const ArrowRight = ({ color = '#f7a136', size = 32 }: { color?: string, size?: number }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M20 15H22L26.5 20L22 25H20L24.5 20L20 15Z" fill={color} />
        <path d="M14 15H16L20.5 20L16 25H14L18.5 20L14 15Z" fill={color} />
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="2" />
    </svg>
);
