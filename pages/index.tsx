import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { Client } from '../utils/prismic-config'
import Prismic from '@prismicio/client'

const Home: NextPage = ({projects}: any) => {
  const [activePortal, setActivePortal] = useState(false)

  useEffect(() => {
    if(activePortal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  })

  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <CallMe />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const projects = await Client.query(Prismic.Predicates.at('document.type', 'projetos'))

  return {
    props: {
      projects
    }
  }
}
