import React from 'react'
import styled from 'styled-components'

interface MenuProps {
    isClicked: boolean
}

const Wrapper = styled.div<MenuProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: .25s cubic-bezier(.3,0,.5,1);
    ${({isClicked}) => isClicked && `
        opacity: 1;
    `}
    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
    }
`

const Overlay = styled.div<MenuProps>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    background: #FAF8F8;
    transition: .5s cubic-bezier(.3,0,.5,1);
    height: 0;
    width: 0;
    border-bottom-left-radius: 100%;
    ${({isClicked}) => isClicked && `
        height: 130vh;
        width: 160vw;
    `}
`

const Menu = ({ isClicked }: MenuProps) => {

    return (
        <>
            <Overlay isClicked={isClicked} />
            <Wrapper isClicked={isClicked}>
                <a href="">Sobre mim</a>
                <a href="">Blog</a>
            </Wrapper>
        </>
    )
}

export default Menu;