import type { GetStaticProps, NextPage } from 'next'
import CallMe from '../components/Call'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Head from 'next/head'
import { getAllFilesFrontmatter, getFeatured } from '../lib/mdx'
import { getDownloadURL, ref } from '@firebase/storage'
import { storage } from '../firebase/config'

const Home: NextPage = ({ projectsWithUrl, heroImageUrl }: any) => {
  return (
    <>
      <Head>
        <title>Home - Andersonszdc</title>
      </Head>
      <Hero heroImageUrl={heroImageUrl} />
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

  const heroImageUrl = "https://firebasestorage.googleapis.com/v0/b/my-site-1aa62.appspot.com/o/hero-anderson.png?alt=media&token=5b8bebae-edf4-41f0-a8ad-7d96b754e1dc"

  return {
    props: { projectsWithUrl, heroImageUrl }
  }
}
