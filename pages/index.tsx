import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}

export default Home
