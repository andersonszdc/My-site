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
        allProjects.push({params: {projeto: 'champs'} })
      ))

    return {
        paths: allProjects,
        fallback: false
    }
}

export const getStaticProps = async ({params}: PathProps) => {
    const projeto = await Client.getByUID('markdown', 'example-md', {
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
    margin: 60px auto;
    padding: 0 30px;
    max-width: 700px;
    gap: 30px;
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
`

const Projeto = ({projeto}: ProjectProps) => {

    const rawMarkdown = RichText.asText(projeto.data.markdown)

    const renderers = {
        img: (image: any) => {
            console.log(image)
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
            <ReactMarkdown components={renderers}>
                {rawMarkdown}
            </ReactMarkdown>
        </Wrapper>
    )
}

export default Projeto;
