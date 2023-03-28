import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    href: string,
    className?: string,
    target?: '_self' | '_blank',
}

export const Link = ({ children, href, className = '', target = '_self' }: Props) => (
    <a 
        className={className}
        target={target}
        href={href}
        rel="noreferrer"
    >
        {children}
    </a>
)

