import { GetStaticPaths } from 'next'
import React, { useEffect } from 'react'
import { Client } from '../utils/prismic-config'
import Prismic from '@prismicio/client'
import {Document} from '@prismicio/client/types/documents'
import styled from 'styled-components'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from 'react-markdown'

interface PathProps {
    params: {
      projeto: string
    }
}

interface ProjectProps {
    projeto: Document
}

export const getStaticPaths: GetStaticPaths = async () => {

    const projects = await Client.query(Prismic.predicates.at('document.type', 'project'))

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
    const projeto = await Client.getByUID('project', params.projeto, {
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
    margin: 60px 4%;
`

const Markdown = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    padding: 0 30px;
    max-width: 700px;
    gap: 16px;
    h2 {
        color: ${props => props.theme.colors.blue};
        font-weight: 500;
        :not(:first-child) {
            margin-top: 24px;
        }
    }
    p {
        font-weight: 400;
    }
`

const ProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    width: 100%;
    max-width: 700px;
    align-self: center;
    h1 {
        margin-bottom: 8px;
        font-weight: 600;
    }
    a {
        color: ${props => props.theme.colors.blue};
    }
    h3 {
        margin-top: 24px;
        color: ${props => props.theme.colors.blue};
        font-weight: 400;
        font-size: 16px;
    }
    h4 {
        padding: 6px 0;
        font-weight: 500;
    }
    .project_infos {
        display: flex;
        gap: 40px;
    }
`

const Projeto = ({projeto}: ProjectProps) => {

    const rawMarkdown = RichText.asText(projeto.data.content)

    const renderers = {
        img: (image: any) => {
            return <Image className='imagem' src={image.src} alt={image.alt} height="800" width="1280" />
        },
        p: (paragraph: any) => {
            const { node } = paragraph;
            if (node.children[0].tagName === "img") {
              return paragraph.children
            }
            return <p>{paragraph.children}</p>
          }
    }

    return (
        <Wrapper>
                <ProjectHeader>
                    {RichText.render(projeto.data.title)}
                    <a target='_blank' rel='noreferrer' href={projeto.data.link.url}>Ver o projeto no ar</a>
                    <div className="project_infos">
                        <div>
                            <h3>CLIENTE</h3>
                            {RichText.render(projeto.data.clientone)}
                        </div>
                        <div>
                            <h3>ANO</h3>
                            <h4>{projeto.data.year}</h4>
                        </div>
                    </div>
                </ProjectHeader>
                <Markdown>
                    <ReactMarkdown components={renderers}>
                        {rawMarkdown}
                    </ReactMarkdown>
                </Markdown>
        </Wrapper>
    )
}

export default Projeto;
