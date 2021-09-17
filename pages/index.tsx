import type { NextPage } from 'next'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <CallMe />
    </>
  )
}

export default Home
