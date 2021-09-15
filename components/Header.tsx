import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import styled from 'styled-components'

interface WrapperProps {
    isClicked: boolean
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 4%;
    .me {
        display: flex;
        align-items: center;
        gap: 16px;
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
        box-shadow: 0 0 0 0 #16D3E4, 0 0 0 0 #16D3E4;
        transition:  box-shadow 1.1s ease-in-out;
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        .burger {
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background-color: white;
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
            }
            :after {
                top: 5px;
            }
        }
    }
    ${({isClicked}) => isClicked && `
        .menu {
            box-shadow: 0 0 0 130vw #16D3E4, 0 0 0 130vh #16D3E4;
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

const Header: React.FC = () => {

    const [ isClicked, setIsClicked ] = useState(false)

    function handleClick() {
        setIsClicked( isClicked? false : true)
    }

    return (
        <Wrapper isClicked={isClicked}>
            <div className="me">
                <div className="logo">
                    <Image src={logo} alt="logo-anderson" />
                </div>
                <div>
                    <h1 className="title">Anderson Souza</h1>
                    <h2 className="subtitle">Front End & UI Designer</h2>
                </div>
            </div>
            <div onClick={handleClick} className="menu">
                <p>menu</p>
                <span className="burger"></span>
            </div>
        </Wrapper>
    );
}

export default Header