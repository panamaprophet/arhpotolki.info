export const Link = ({ children, href, className = '', target = '_self' }) => (
    <a 
        className={className}
        target={target}
        href={href}
        rel="noreferrer"
    >
        {children}
    </a>
)

