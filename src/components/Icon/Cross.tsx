export const Cross = ({ color = '#f1a136', size = 32 }: { color?: string, size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="2" />
        <rect x="24.1924" y="15" width="2" height="13" transform="rotate(45 24.1924 15)" fill={color} />
        <rect x="15" y="16.4142" width="2" height="13" transform="rotate(-45 15 16.4142)" fill={color} />
    </svg>
);
