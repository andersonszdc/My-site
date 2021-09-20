import type { NextPage } from 'next'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home: NextPage = () => {

  const [activePortal, setActivePortal] = useState(false)

  const handleClick = () => {
    setActivePortal(activePortal ? false : true)
    console.log('clicou')
  }

  return (
    <>
      <Hero />
      <Projects handleClick={handleClick} />
      <CallMe />
      { activePortal ? (
        createPortal(<div>oi</div>, 
          document.querySelector("#myportal") as HTMLDivElement)
        ) : null
      }
    </>
  )
}

export default Home
