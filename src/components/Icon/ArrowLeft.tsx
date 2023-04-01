export const ArrowLeft = ({ color = '#f7a136', size = 32 }: { color?: string, size?: number }) => (
    <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
    >
        <path d="M19 25H17L12.5 20L17 15H19L14.5 20L19 25Z" fill={color} />
        <path d="M25 25H23L18.5 20L23 15H25L20.5 20L25 25Z" fill={color} />
        <circle cx="20" cy="20" r="19.5" stroke-width="1.4" stroke={color} />
    </svg>
);
