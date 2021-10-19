import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styled from 'styled-components'

interface SkillProps {
    title: string
    skills: string[]
    active: boolean
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding: 2.4rem;
    border-radius: 1.6rem;
    cursor: pointer;
    box-shadow: 5px 5px 10px 0px #000000, -5px -5px 10px 0px #FFFFFF4D;
    overflow: hidden;
    .skill_menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .skill_angle {
        display: inline-flex;
        transition: 0.4s ease-in-out;
        color: ${props => props.theme.colors.blue};
        font-size: 3.6rem;
    }
    .skill_techs {
        display: flex;
        flex-direction: column;
        gap: .8rem;
        transition: 0.6s ease-in-out;
        max-height: 25rem;
    }
    h3 {
        color: ${props => props.theme.colors.blue};
        font-size: 2.4rem;
        font-weight: 600;
    }
    h4 {
        font-size: 1.6rem;
        font-weight: 500;
    }
    h4:first-child {
        padding-top: 1.6rem;
    }
`

const Skill: React.FC<SkillProps> = (props) => {

    const wrapperRef = useRef<HTMLDivElement>(null)
    const techsRef = useRef<HTMLDivElement>(null)
    const angleRef = useRef<HTMLDivElement>(null)
    const [ isActive, setIsActive ] = useState(!props.active)

    const handleClick = () => {
        setIsActive(isActive ? false : true)
    }

    useEffect(() => {
        if (techsRef.current && wrapperRef.current && angleRef.current) {
            if (isActive) {
                techsRef.current.style.opacity = '0'
                techsRef.current.style.maxHeight = '0'
                wrapperRef.current.style.boxShadow = 'inset 5px 5px 10px 0px #000000, inset -5px -5px 10px 0px #FFFFFF4D'
                angleRef.current.style.transform = 'rotate(-90deg)'
            } else {
                techsRef.current.style.opacity = '1'
                techsRef.current.style.maxHeight = '250px'
                wrapperRef.current.style.boxShadow = '5px 5px 10px 0px #000000, -5px -5px 10px 0px #FFFFFF4D'
                angleRef.current.style.transform = 'rotate(0deg)'
            }
        }
    }, [isActive])
    

    return (
        <div>
            <Wrapper ref={wrapperRef} onClick={handleClick}>
                <div className="skill_menu">
                    <h3>{props.title}</h3>
                    <div className="skill_angle" ref={angleRef}>
                        <FaAngleDown/>
                    </div>
                </div>
                <div className="skill_techs" ref={techsRef}>
                    {props.skills.map((skill, index) => (
                        <h4 key={index}>{skill}</h4>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
}

export default Skill;