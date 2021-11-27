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
    level: number;
    text: string;
  }>;  

type TableOfContentsProps = {
    toc?: HeadingScrollSpy;
    activeSection: string | null;
    minLevel: number;
  };

const TableOfContent = ({toc, activeSection, minLevel}: TableOfContentsProps) => {

    const lastPosition = useRef<number>(0)

    useEffect(() => {
        const container = document.getElementById('toc-container')
        const activeLink = document.getElementById(`link-${activeSection}`)

        if (container && activeLink) {
            const cTop = container.scrollTop
            const cBottom = cTop + container.clientHeight

            const lTop = activeLink.offsetTop - container.offsetTop;
            const lBottom = lTop + activeLink.clientHeight;

            const isTotal = lTop >= cTop && lBottom <= cBottom;

            const isScrollingUp = lastPosition.current > window.scrollY;
            lastPosition.current = window.scrollY;

            if (!isTotal) {
                const offset = 25;
                const top = isScrollingUp
                ? lTop - container.clientHeight + offset
                : lTop - offset;

                container.scrollTo({ top, behavior: 'smooth' });
            }
        }
    }, [activeSection])

    return (
        <TableDiv>
            <h3 className="title">Table of contents</h3>
            <TocsDiv>
                {toc
                ? toc.map(({ id, level, text}) => (
                    <TOCLink
                        id={id}
                        key={id}
                        activeSection={activeSection}
                        level={level}
                        minLevel={minLevel}
                        text={text}
                    />
                ))
                : null}
            </TocsDiv>
        </TableDiv>
    );
}

export default TableOfContent;