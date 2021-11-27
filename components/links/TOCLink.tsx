import UnstyledLink from "./UnstyledLink";

type TOCLinkProps = {
    id: string;
    level: number;
    minLevel: number;
    text: string;
    activeSection: string | null;
    isTableTitle?: boolean;
};

export default function TOCLink({
    id,
    level,
    minLevel,
    text,
    activeSection,
    isTableTitle = true
}: TOCLinkProps) {
    return (
        <UnstyledLink
            href={`#${id}`}
            id={`link-${id}`}
            style={{ marginLeft: (level - minLevel) * 16 }}
            active={activeSection === id ? true : false}
            isTableTitle={isTableTitle}
        >
            {text}
        </UnstyledLink>
    )
}