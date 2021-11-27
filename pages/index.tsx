import type { GetStaticProps, NextPage } from 'next'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Head from 'next/head'
import { getAllFilesFrontmatter, getFeatured, getTeste } from '../lib/mdx'

const Home: NextPage = ({projects, featuredProjects}: any) => {
  return (
    <>
      <Head>
        <title>Andersonszdc</title>
      </Head>
      <Hero />
      <Projects projects={featuredProjects} />
      <CallMe />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const projects = await getAllFilesFrontmatter('projects')

  const featuredProjects = getFeatured(projects, [
    'my-platform',
    'my-site',
    'my-delivery'
  ])

  return {
    props: { featuredProjects }
  }
}
