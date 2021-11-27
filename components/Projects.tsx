import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import deliveryCover from '../assets/delivery-cover.png';
import siteCover from '../assets/site-cover.png';
import platformCover from '../assets/platform-cover.png';

interface StyledProps {
    rightIsActive?: boolean,
    leftIsActive?: boolean
}

const Wrapper = styled.div`
    padding: 40px 4%;

    .projects_title {
        font-size: 2.4rem;
        margin-bottom: 4rem;
    }

    .projects__cards {
        display: block;
        white-space: nowrap;
        overflow: hidden;
    }

    .projects__slider {
        display: block;
        transition: 0.6s ease-in-out;
    }

    @media (max-width: 400px) {
        .projects_title {
            font-size: 1.8rem;
            margin-bottom: 2.4rem;
        }
    }
`

const AnglesBtn = styled.div<StyledProps>`
    display: flex;
    justify-content: center;
    gap: 12px;
    font-size: 40px;
    margin-top: 24px;

    .angleLeft, .angleRight {
        cursor: pointer;
        transition: opacity .5s ease-in-out;
    }

    ${({leftIsActive}) => !leftIsActive && `
        .angleLeft {
            cursor: default;
            opacity: 0.2;
        }
    `}

    ${({rightIsActive}) => !rightIsActive && `
        .angleRight {
            cursor: default;
            opacity: 0.2;
        }
    `}
`

const Projects = ({projects}: any) => {
    const [ translate, setTranslate ] = useState(0)
    const [ leftIsActive, setleftIsActive ] = useState(true)
    const [ rightIsActive, setRightIsActive ] = useState(true)
    const [ width, setWidth ] = useState(0)
    const [ scrollwidth, setScrollsetWidth ] = useState(0)
    const slider = useRef<HTMLDivElement>(null)

    function handleRight() {
        if(rightIsActive===true) {
            setTranslate(translate - width)
        }
    }

    function handleLeft() {
        if (leftIsActive===true) {
            setTranslate(translate + width)
        }
    }

    useEffect(() => {
        if(null !== slider.current) {
            setScrollsetWidth(slider.current.scrollWidth)
            setWidth(slider.current.clientWidth)
            slider.current.style.transform = `translateX(${translate}px)`
        }
    }, [slider, translate])

    useEffect(() => {
            setleftIsActive(translate===0?false:true)
            if((scrollwidth <= width - translate)) {
                setRightIsActive(false)
            } else {
                setRightIsActive(true)
            }
    }, [translate, width, scrollwidth])

    return (
        <Wrapper>
            <h2 className="projects_title">Projetos</h2>
            <div className="projects__cards">
                <div ref={slider} className="projects__slider">
                    {projects.map((project: any, index: number) => (
                        <Card data={project} key={index} />
                    ))}
                </div>
                <AnglesBtn rightIsActive={rightIsActive} leftIsActive={leftIsActive} >
                    <FaAngleLeft className="angleLeft" onClick={handleLeft} />
                    <FaAngleRight className="angleRight" onClick={handleRight} />
                </AnglesBtn>
            </div>
        </Wrapper>
    );
}

export default Projects;