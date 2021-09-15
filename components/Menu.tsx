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

    display: none;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: 5s cubic-bezier(.3,0,.5,1);
    ${({isClicked}) => isClicked && `
        opacity: 1;
        display: flex;
    `}
    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        transition: .35s cubic-bezier(.3,0,.5,1);
        : hover {
            color: ${props => props.theme.colors.blue}
        }
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
                <a href="">Portfólio</a>
                <a href="">Contatos</a>
            </Wrapper>
        </>
    )
}

export default Menu;