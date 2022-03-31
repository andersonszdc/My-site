import React from "react";
import TOCLink from "../../links/TOCLink";
import { TableDiv, TocsDiv } from "./styles";

export type HeadingScrollSpy = Array<{
  id: string;
  text: string;
}>;

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
};

const TableOfContent = ({ toc, activeSection }: TableOfContentsProps) => {
  return (
    <TableDiv id="toc-container">
      <h3 className="title">Table of contents</h3>
      <TocsDiv>
        {toc
          ? toc.map(({ id, text }) => (
              <TOCLink
                id={id}
                key={id}
                text={text}
                activeSection={activeSection}
              />
            ))
          : null}
      </TocsDiv>
    </TableDiv>
  );
};

export default TableOfContent;
