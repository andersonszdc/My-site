import React, { useRef, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 24px;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 5px 5px 10px 0px #000000, -5px -5px 10px 0px #FFFFFF4D;
    .skill_menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
            color: ${props => props.theme.colors.blue};
            font-size: 24px;
            font-weight: 600;
        }
        .skill_angle {
            display: inline-flex;
            transition: 0.6s ease-in-out;
            color: ${props => props.theme.colors.blue};
            font-size: 36px;
        }
    }
    .skill_techs {
        display: flex;
        flex-direction: column;
        gap: 8px;
        transition: 0.6s ease-in-out;
        max-height: 250px;
    }
    h4 {
        font-size: 16px;
        font-weight: 500;
    }
`

const Skill: React.FC = () => {

    const wrapperRef = useRef<HTMLDivElement>(null)
    const techsRef = useRef<HTMLDivElement>(null)
    const angleRef = useRef<HTMLDivElement>(null)
    const [ isActive, setIsActive ] = useState(true)

    const handleClick = () => {
        if (techsRef.current && wrapperRef.current && angleRef.current) {
            if (isActive) {
                techsRef.current.style.opacity = '0'
                techsRef.current.style.maxHeight = '0'
                wrapperRef.current.style.boxShadow = 'inset 5px 5px 10px 0px #000000, inset -5px -5px 10px 0px #FFFFFF4D'
                angleRef.current.style.transform = 'rotate(180deg)'
            } else {
                techsRef.current.style.opacity = '1'
                techsRef.current.style.maxHeight = '250px'
                wrapperRef.current.style.boxShadow = '5px 5px 10px 0px #000000, -5px -5px 10px 0px #FFFFFF4D'
                angleRef.current.style.transform = 'rotate(0deg)'
            }
        }
        setIsActive(isActive ? false : true)
    }

    return (
        <Wrapper ref={wrapperRef} onClick={handleClick}>
            <div className="skill_menu">
                <h3>Front-end</h3>
                <div className="skill_angle" ref={angleRef}>
                    <FaAngleUp/>
                </div>
            </div>
            <div className="skill_techs" ref={techsRef}>
                <h4>React</h4>
                <h4>NextJS</h4>
            </div>
        </Wrapper>
    );
}

export default Skill;