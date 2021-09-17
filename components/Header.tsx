import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Link from 'next/link'

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
        cursor: pointer;
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
        p {
            font-size: 20px;
        }
        .burger {
            display: flex;
            flex-direction: column;
            gap: 3px;
            transition: all .2s linear;
            .one,
            .two,
            .three {
                width: 22px;
                height: 3px;
                background-color: ${props => props.theme.colors.text};
                border-radius: 1px;
                transition: all .3s linear;
            }
        }
        :hover {
            opacity: 0.8;
        ${({isClicked}) => !isClicked && `
            .burger {
                gap: 6px;
            }
        `}
        }
    }
    ${({isClicked}) => isClicked && `
        .menu {
            .burger {
                .one {
                    transform: translateY(6px) rotate(45deg);
                }
                .two {
                    opacity: 0;
                }
                .three {
                    transform: translateY(-6px) rotate(-45deg);
                }
            }
            :hover {
                .burger {
                    transform: rotate(-90deg);
                }
            }
        }
    `}
    @media (max-width: 600px) {
        .me {
            .title {
                font-size: 18px;
            }
            .subtitle {
                font-size: 12px;
            }
        }
    }
`

interface HeaderProps {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: HeaderProps) => {

    const [ isClicked, setIsClicked ] = useState(false)
    const [ color, setColor ] = useState('#FAF8F8')

    function handleClick() {
        setIsClicked( isClicked? false : true)
        setColor( color === '#FAF8F8'? '#2B2323' : '#FAF8F8')
        toggleTheme()
    }

    useEffect(() => {
        if(isClicked) {
            document.body.style.overflow='hidden'
        } else {
            document.body.style.overflow='auto'
        }
    }, [isClicked])

    return (
        <>
            <Wrapper isClicked={isClicked}>
                <Link passHref href='/'>
                    <div className="me">
                        <Logo width="40px" color={color} />
                        <div>
                            <h1 className="title">Anderson Souza</h1>
                            <h2 className="subtitle">Front-End & UI Designer</h2>
                        </div>
                    </div>
                </Link>
                <div onClick={handleClick} className="menu">
                    <p>menu</p>
                    <div className="burger">
                        <span className='one'/>
                        <span className='two'/>
                        <span className='three'/>
                    </div>
                </div>
            </Wrapper>
            <Menu handleClick={handleClick} isClicked={isClicked} />
        </>
    );
}

export default Header