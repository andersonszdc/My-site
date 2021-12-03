import type { GetStaticProps, NextPage } from 'next'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Head from 'next/head'
import { getAllFilesFrontmatter, getFeatured } from '../lib/mdx'
import { getDownloadURL, ref } from '@firebase/storage'
import { storage } from '../firebase/config'

const Home: NextPage = ({ featuredProjects, projectsWithUrl }: any) => {
  return (
    <>
      <Head>
        <title>Home - Andersonszdc</title>
      </Head>
      <Hero />
      <Projects projects={projectsWithUrl} />
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

  let projectsWithUrl: any = []

  const searchUrl = async (project: any) => {
      const fileName = project.cover
      const imageRef = ref(storage, fileName)
      const cover = await getDownloadURL(imageRef)
      projectsWithUrl.push({...project, cover})
    }

  for (let project of featuredProjects) {
    await searchUrl(project)
  }

  return {
    props: { featuredProjects, projectsWithUrl }
  }
}
