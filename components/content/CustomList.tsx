import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 1.6rem 0;
    li {
        position: relative;
        color: ${props => props.theme.colors.text};
        font-size: 1.6rem;
        align-items: center;
        padding-left: 3rem;
    }
    li:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.blue};
        top: calc(8.5px - 4px);
        left: calc(1.5rem - 4px);
    }
`

const CustomList: React.FC = ({children}) => {
  return (
      <List>
          {children}
      </List>
  );
}

export default CustomList;