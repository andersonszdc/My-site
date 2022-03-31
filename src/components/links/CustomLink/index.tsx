import UnstyledLink from "../UnstyledLink";
import { ChildrenSpan } from "./styles";

export default function CustomLink({ children, className = "", ...rest }: any) {
  return (
    <UnstyledLink {...rest} className={className}>
      <ChildrenSpan>{children}</ChildrenSpan>
    </UnstyledLink>
  );
}
