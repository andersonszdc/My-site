import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(141, 141, 138, 0.3);  
`

const PortalProj = ({handleClick}: any) => {
  return (
      <>
        <Overlay />
        <Wrapper>
            oi
            <button onClick={handleClick}>sair</button>
        </Wrapper>
      </>
  );
}

export default PortalProj