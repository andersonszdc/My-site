import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'
import styled from 'styled-components'
import mask from '../assets/mask.png'
import Menu from './Menu'

interface WrapperProps {
    isClicked: boolean
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 4%;
    transition: .5s cubic-bezier(.3,0,.5,1);
    .me {
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 10;
        .logo {
            display: flex;
            width: 40px;
            align-items: center;
            #path-fill {
                transition: .5s cubic-bezier(.3,0,.5,1);
            }
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
    const [ color, setColor ] = useState('#FAF8F8')

    function handleClick() {
        setIsClicked( isClicked? false : true)
        setColor( color === '#FAF8F8'? '#2B2323' : '#FAF8F8')
    }

    return (
        <>
            <Wrapper isClicked={isClicked}>
                <div className="me">
                    {/* <div className="logo">
                        <Image src={isClicked? logoBlack : logoWhite} alt="logo-anderson" />
                    </div> */}
                    <div className="logo">
                        <svg viewBox="0 0 818 1053" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="342" y="3" width="467" height="1040">
                                <path d="M807.933 1023.28L483.965 16.8716C481.304 8.60472 473.612 3 464.927 3H352.244C345.456 3 340.64 9.6185 342.729 16.0771L655.548 983.373C657.414 989.143 661.798 993.755 667.465 995.911L788.321 1041.9C800.078 1046.37 811.788 1035.26 807.933 1023.28Z" fill="#16D3E4"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <rect x="339" y="-47" width="479" height="1732" fill="url(#pattern0)"/>
                            </g>
                            <path d="M805.554 1024.05L481.586 17.6377C479.257 10.4041 472.526 5.5 464.927 5.5H352.244C347.153 5.5 343.541 10.4639 345.108 15.3078L657.927 982.604C659.56 987.652 663.395 991.688 668.354 993.575L789.21 1039.56C799.007 1043.29 808.766 1034.03 805.554 1024.05Z" stroke="#16D3E4" strokeWidth="5"/>
                            <path id="path-fill" d="M9.56652 1023.28L333.535 16.8716C336.196 8.60472 343.888 3 352.573 3H465.261C472.047 3 476.863 9.61604 474.777 16.074L285.5 602H534.5L577.5 735H242.5L161.956 983.385C160.087 989.148 155.706 993.753 150.044 995.908L29.1794 1041.9C17.4223 1046.37 5.71191 1035.26 9.56652 1023.28Z" fill={color} stroke="#16D3E4" strokeWidth="5"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="translate(-0.453722) scale(0.0019705 0.000544959)"/>
                                </pattern>
                                <image id="image0" width="968" height="1835"/>
                            </defs>
                        </svg>
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