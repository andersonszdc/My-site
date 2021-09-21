import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import PortalProj from '../components/PortalProj'
import Projects from '../components/Projects'

const Home: NextPage = () => {

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
      <Projects handleClick={handleClick} />
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
