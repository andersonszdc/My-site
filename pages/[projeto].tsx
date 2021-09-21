import { GetStaticPaths } from 'next'
import React from 'react'
import { Client } from '../utils/prismic-config'
import Prismic from '@prismicio/client'
import {Document} from '@prismicio/client/types/documents'

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

const Projeto = ({projeto}: ProjectProps) => {
console.log(projeto)
    return (
        <div>
            {projeto.data.title[0].text}
        </div>
    )
}

export default Projeto;
