export const ArrowDown = ({ color = '#2484c6', size = 32 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: size, height: size }}>
        <g>
            <circle cx="12" cy="12" r="11" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="m17 10-5 5-5-5" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
    </svg>
);
