import { GetStaticPaths } from 'next'
import React from 'react'
import { Client } from '../utils/prismic-config'
import Prismic from '@prismicio/client'
import {Document} from '@prismicio/client/types/documents'
import styled from 'styled-components'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

interface PathProps {
    params: {
      projeto: string
    }
}

interface ProjectProps {
    projeto: Document
}

export const getStaticPaths: GetStaticPaths = async () => {

    const projects = await Client.query(Prismic.predicates.at('document.type', 'projetos'))

    const allProjects: any[] = []

    projects.results.map((post) => (
        allProjects.push({params: {projeto: post.uid} })
      ))

    return {
        paths: allProjects,
        fallback: false
    }
}

export const getStaticProps = async ({params}: PathProps) => {
    const projeto = await Client.getByUID('projetos', params.projeto, {
        lang: 'pt-br'
    })

    return {
        props: {
            projeto,
        }
    }

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 90px 4%;
    a {
        color: #ccc;
        text-decoration: none;
        border-bottom: 1px solid #ccc;
        font-weight: 500;
    }
    .description {
        display: flex;
        .left {
            width: 50%;
            .role {
                margin-top: 45px;
            }
        }
        .right {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-left: 16%;
            width: 50%;
            p {
                display: inline-flex;
                color: #ccc;
                font-weight: 500;
            }
        }
    }
    .content {
        margin-top: 45px;
        width: 100%;
    }
    .project__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        .section {
            max-width: 800px;
            margin: 60px 0;
            h3 {
                font-weight: 700;
                font-size: 24px;
                color: ${props => props.theme.colors.blue};
            }
            h4 {
                margin-top: 16px;
                font-weight: 500;
                font-size: 16px;
            }
            .image {
                margin-top: 16px;
                display: flex;
                justify-content: center;
            }
        }
    }
    @media (max-width: 750px) {
        .description {
            flex-direction: column;
            gap: 45px;
            .left {
                width: 100%;
            }
            .right {
                margin-left: 0;
                width: 100%;
            }
        }
    }
`

const Projeto = ({projeto}: ProjectProps) => {
console.log(projeto)

    const projectContent = projeto.data.body.map((slice: any, index: any) => {

        

            const galleryContent = slice.items.map((item: any, itemIndex: any) => (
                <div key={itemIndex} className='section'>
                    {RichText.render(item.text)}
                    {item.image.url &&
                    <div className='image'>
                        <Image src={item.image.url} width={item.image.dimensions.width} height={item.image.dimensions.height} alt='' />
                    </div>
                    }
                </div>
            ))
            return (
                <div className='project__box' key={index}>
                <div>
                    {galleryContent}
                </div>
                </div>
            )
        
    })

    return (
        <Wrapper>
            <div className='description'>
                <div className='left'>
                    <h1>{projeto.data.title[0].text}</h1>
                    <h3><a href={projeto.data.link[0].text}>ver o projeto no ar</a></h3>
                    <h3 className='role'>MINHA FUNÇÃO</h3>
                    <h4>Designer</h4>
                    <h3 className='role'>ANO</h3>
                    <h4>{projeto.data.year}</h4>
                </div>
                <div className='right'>
                    {RichText.render(projeto.data.content)}
                </div>
            </div>
            <div className='content'>
                <Image width={projeto.data.frame.dimensions.width} height={projeto.data.frame.dimensions.height} src={projeto.data.frame.url} alt='' />
            </div>
            {projectContent}
        </Wrapper>
    )
}

export default Projeto;
