import React from 'react'
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

interface MenuProps {
    isClicked: boolean
}

const overlayUp = keyframes`
    from {
        height: 0;
    }
    to {
        height: 100vh;
    }
`

const Wrapper = styled.div`
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
    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: #FAF8F8;
    animation: ${overlayUp} .6s ease-in-out;
`

const Menu = ({ isClicked }: MenuProps) => {

    if (!isClicked) return null
    return createPortal(
        <>
            <Overlay />
            <Wrapper>
                <a href="">Sobre mim</a>
                <a href="">Blog</a>
            </Wrapper>
        </>,
        document.querySelector('#menu') as HTMLDivElement
    )
}

export default Menu;