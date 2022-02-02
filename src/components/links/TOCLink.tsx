import UnstyledLink from "./UnstyledLink";

type TOCLinkProps = {
    id: string;
    text: string;
    activeSection: string | null;
    isTableTitle?: boolean;
};

export default function TOCLink({
    id,
    text,
    activeSection,
    isTableTitle = true
}: TOCLinkProps) {
    return (
        <UnstyledLink
            href={`#${id}`}
            id={`link-${id}`}
            active={activeSection === id ? true : false}
            isTableTitle={isTableTitle}
        >
            {text}
        </UnstyledLink>
    )
}