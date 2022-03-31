import Link, { LinkProps } from "next/link";
import { StyledLink } from "./styles";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  isTableTitle?: boolean;
  className?: string;
  active?: boolean;
} & React.ComponentPropsWithoutRef<"a"> &
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
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link passHref href={href}>
        <StyledLink
          active={active}
          isTableTitle={isTableTitle}
          className={className}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }

  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      isTableTitle={isTableTitle}
    >
      {children}
    </StyledLink>
  );
}
