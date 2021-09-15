import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'
import styled from 'styled-components'
import { createPortal } from 'react-dom'
import Menu from './Menu'

interface WrapperProps {
    isClicked: boolean
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 4%;
    .me {
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 10;
        .logo {
            width: 50px;
        }
        .title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .subtitle {
            font-size: 16px;
            font-weight: 500;
            color: #16D3E4;
        }
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        z-index: 10;
        .burger {
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background-color: ${props => props.theme.colors.text};
            border-radius: 1px;
            transition: .5s ease-in-out;
            :before, :after {
                position: relative;
                content: '';
                display: block;
                width: 20px;
                height: 2px;
                background-color: white;
                border-radius: 1px;
                transition: .5s ease-in-out;
            }
            :before {
                bottom: 7px;
                background-color: ${props => props.theme.colors.text};
            }
            :after {
                top: 5px;
                background-color: ${props => props.theme.colors.text};
            }
        }
    }
    ${({isClicked}) => isClicked && `
        .menu {
            .burger {
                transform: rotate(45deg);
                :before {
                    transform: rotate(90deg);
                    bottom: 0px;
                }
                :after {
                    transform: rotate(90deg);
                    top: -2px;
                }
            }
        }
    `}
`

interface HeaderProps {
  toggleTheme: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Header = ({ toggleTheme }: HeaderProps) => {

    const [ isClicked, setIsClicked ] = useState(false)

    function handleClick() {
        setIsClicked( isClicked? false : true)
    }

    return (
        <>
            <Wrapper isClicked={isClicked}>
                <div className="me">
                    <div className="logo">
                        <Image src={isClicked? logoBlack : logoWhite} alt="logo-anderson" />
                    </div>
                    <div>
                        <h1 className="title">Anderson Souza</h1>
                        <h2 className="subtitle">Front End & UI Designer</h2>
                    </div>
                </div>
                <div onClick={handleClick} onClickCapture={toggleTheme} className="menu">
                    <p>menu</p>
                    <span className="burger"></span>
                </div>
            </Wrapper>
            <Menu isClicked={isClicked} />
        </>
    );
}

export default Header