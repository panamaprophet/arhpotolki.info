export const ArrowLeft = ({ color = '#f7a136', size = 32 }: { color?: string, size?: number }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M26.5 25H24.5L20 20L24.5 15H26.5L22 20L26.5 25Z" fill={color} />
        <path d="M20.5 25H18.5L14 20L18.5 15H20.5L16 20L20.5 25Z" fill={color} />
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="2" />
    </svg>
);
