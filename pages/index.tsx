import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import PortalProj from '../components/PortalProj'
import Projects from '../components/Projects'
import { Client } from '../utils/prismic-config'
import Prismic from '@prismicio/client'

const Home: NextPage = ({projects}: any) => {
  const [activePortal, setActivePortal] = useState(false)

  const handleClick = () => {
    setActivePortal(activePortal ? false : true)
    console.log('clicou')
  }

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
      <Projects projects={projects} handleClick={handleClick} />
      <CallMe />
      { activePortal ? (
        createPortal(<PortalProj handleClick={handleClick} />, 
          document.querySelector("#myportal") as HTMLDivElement)
        ) : null
      }
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
