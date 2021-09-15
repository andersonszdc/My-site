import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Wrapper = styled.div`
    padding: 0 4%;
    .projects__title {
        margin-bottom: 45px;
    }
    .projects__cards {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        .projects__slider {
            display: block;
            overflow: hidden;
        }
        .angles {
            display: flex;
            justify-content: center;
            gap: 12px;
            font-size: 40px;
            margin-top: 24px;
            svg {
                cursor: pointer;
            }
        }
    }
`

const Projects: React.FC = () => {

    const [ translate, setTranslate ] = useState(0)

    function handleRight() {
        setTranslate(translate - 100)
    }

    function handleLeft() {
        setTranslate(translate + 100)
    }

    useEffect(() => {
        console.log(translate)
    }, [translate])

    return (
        <Wrapper>
            <h2 className="projects__title">Projetos</h2>
            <div className="projects__cards">
                <div className="projects__slider">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="angles">
                    <FaAngleLeft onClick={handleLeft} />
                    <FaAngleRight onClick={handleRight} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;