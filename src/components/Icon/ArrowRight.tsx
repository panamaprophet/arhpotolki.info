export const ArrowRight = ({ color = '#f7a136', size = 32 }: { color?: string, size?: number }) => (
    <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
    >
        <path d="M21 15H23L27.5 20L23 25H21L25.5 20L21 15Z" fill={color} />
        <path d="M15 15H17L21.5 20L17 25H15L19.5 20L15 15Z" fill={color} />
        <circle cx="20" cy="20" r="19" stroke={color} stroke-width="2" />
    </svg>
);
