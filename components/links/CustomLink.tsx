import styled from "styled-components";
import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

const ChildrenSpan = styled.span`
`

export default function CustomLink({
    children,
    className='',
    ...rest
}: UnstyledLinkProps) {
    return (
        <UnstyledLink
            {...rest}
            className={className}
        >
            <ChildrenSpan>
                {children}
            </ChildrenSpan>
        </UnstyledLink>
    )
}