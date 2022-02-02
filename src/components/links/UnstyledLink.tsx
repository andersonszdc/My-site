import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a<any>`
    display: inline-flex;
    font-size: 1.4rem;
    align-items: center;
    color: ${props => props.active ? props.theme.colors.blue : '#ccc'};
    text-decoration: none;
    transition: 0.3s ease;

    :hover {
        color: ${props => !props.active && `white`};
    }
    
    ${props => !props.isTableTitle && `
        background-image: linear-gradient(to right, ${props.theme.colors.blue}, ${props.theme.colors.blue});
        background-size: 0 2px;
        background-position: 0% 100%;
        background-repeat: no-repeat;
        color: ${props.theme.colors.blue};
        :hover {
            background-size: 100% 2px;
        }
    `};

    :focus {
        outline: none;
    }

    :focus-visible {
        box-shadow: inset 0 0 0 3 blue;
    }
`

export type UnstyledLinkProps = {
    href: string;
    children: React.ReactNode;
    openNewTab?: boolean;
    isTableTitle?: boolean
    className?: string;
    active?: boolean;
  } & React.ComponentPropsWithoutRef<'a'> &
    LinkProps;

export default function UnstyledLink({
    children,
    href,
    openNewTab,
    className,
    active,
    isTableTitle,
    ...rest
}: UnstyledLinkProps) {
    const isNewTab = 
        openNewTab !== undefined
            ? openNewTab
            : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
        return (
            <Link passHref href={href}>
                <StyledLink active={active} isTableTitle={isTableTitle} className={className}>
                    {children}
                </StyledLink>
            </Link>
        )
    }


    return (
        <StyledLink 
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className={className}
            isTableTitle={isTableTitle} 
        >{children}</StyledLink>
    )
}