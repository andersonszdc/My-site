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

    const projects = await Client.query(Prismic.predicates.at('document.type', 'markdown'))

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
    const projeto = await Client.getByUID('markdown', params.projeto, {
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
    .portf__header {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .portf__info {
        h1 {
            margin-bottom: 4px;
            font-weight: 600;
        }
        a {
            color: ${props => props.theme.colors.blue};
        }
        h3:first-child {
            margin-top: 42px;
        }
        h3 {
            margin-top: 30px;
            color: #ccc;
            font-weight: 300;
        }
        h4 {
            padding: 6px 0;
            font-weight: 500;
        }
    }
    .content {
        h3:not(:first-child) {
            margin-top: 30px;
        }
        h3 {
            font-weight: 500;
        }
    }
    .markdown {
        display: flex;
        flex-direction: column;
        margin: 90px auto;
        padding: 0 30px;
        max-width: 700px;
        gap: 18px;
        h2 {
            color: ${props => props.theme.colors.blue};
            font-weight: 600;
        }
        h2:not(:first-child) {
            margin-top: 30px;
        }
        p {
            font-weight: 500;
        }
    }
`

const Projeto = ({projeto}: ProjectProps) => {

    const rawMarkdown = RichText.asText(projeto.data.markdown)
    const rawContent = RichText.asText(projeto.data.content)

    const renderers = {
        img: (image: any) => {
            return <Image className='imagem' src={image.src} alt={image.alt} height="800" width="1600" />
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
            <div className='portf__header'>
                <div className='portf__info'>
                    {RichText.render(projeto.data.title)}
                    <a target='_blank' rel='noreferrer' href={projeto.data.link.url}>Ver o projeto no ar</a>
                    <h3>FUNÇÕES</h3>
                    {RichText.render(projeto.data.role)}
                    <h3>ANO</h3>
                    <h4>{projeto.data.year}</h4>
                    <h3>CLIENTE</h3>
                    {RichText.render(projeto.data.client)}
                </div>
                <div className='content'>
                    <ReactMarkdown>
                        {rawContent}
                    </ReactMarkdown>
                </div>
            </div>
            <div className='markdown'>
                <ReactMarkdown components={renderers}>
                    {rawMarkdown}
                </ReactMarkdown>
            </div>
        </Wrapper>
    )
}

export default Projeto;
