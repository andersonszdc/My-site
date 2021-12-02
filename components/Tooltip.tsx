import { Tooltip as TippyTooltip } from 'react-tippy';
import styled from 'styled-components';

const TooltipDiv = styled.div`
    display: inline-block;
    padding: .5rem;
    background-color: black;
    border: 1px solid white;
    border-radius: .5rem;
`

type TooltipTextProps = {
    content?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    spanClassName?: string;
    withUnderline?: boolean;
  };
  
  export default function Tooltip({
    content,
    children
  }: TooltipTextProps) {
    return (
      <TippyTooltip
        trigger='mouseenter'
        interactive
        html={
          <TooltipDiv
          >
            {content}
          </TooltipDiv>
        }
      >
        {children}
      </TippyTooltip>
    );
  }