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
`

const Projeto = ({projeto}: ProjectProps) => {
console.log(projeto)
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
        </Wrapper>
    )
}

export default Projeto;
