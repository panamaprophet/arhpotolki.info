export const Link = ({ children, href, classes = [], target = "_self" }) => (
    <a 
        className={[...classes].join(' ')}
        target={target}
        href={href}
        rel="noreferrer"
    >
        {children}
    </a>
)

