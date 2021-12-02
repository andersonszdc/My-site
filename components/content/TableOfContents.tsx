import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TOCLink from '../links/TOCLink';

const TocsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.4rem;
    gap: 1.2rem;
`

const TableDiv = styled.div`
    .title {
        font-size: 2rem;
    }
`

export type HeadingScrollSpy = Array<{
    id: string;
    text: string;
  }>;  

type TableOfContentsProps = {
    toc?: HeadingScrollSpy;
    activeSection: string | null;
  };

const TableOfContent = ({toc, activeSection}: TableOfContentsProps) => {

    return (
        <TableDiv id="toc-container">
            <h3 className="title">Table of contents</h3>
            <TocsDiv>
                {toc
                ? toc.map(({ id, text}) => (
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
}

export default TableOfContent;