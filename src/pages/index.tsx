import type { GetStaticProps, NextPage } from "next";
import CallMe from "../sections/callToAction";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Head from "next/head";
import { getAllFilesFrontmatter, getFeatured } from "../lib/mdx";
import { getDownloadURL, ref } from "@firebase/storage";
import { storage } from "../../firebase/config";
import { Frontmatter } from "../types/frontmatters";
import { motion } from "framer-motion";

type HomeProps = {
  projectsWithUrl: Frontmatter[];
  heroImageUrl: string;
};

const Home = ({ projectsWithUrl, heroImageUrl }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home - Andersonszdc</title>
      </Head>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
      >
        <Hero />
        <Projects projects={projectsWithUrl} />
        <CallMe />
      </motion.div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllFilesFrontmatter("projects");

  const featuredProjects = getFeatured(projects, [
    "my-platform",
    "my-site",
    "my-delivery",
  ]);

  let projectsWithUrl: Frontmatter[] = [];

  const searchUrl = async (project: Frontmatter) => {
    const fileName = project.cover;
    const imageRef = ref(storage, fileName);
    const cover = await getDownloadURL(imageRef);
    projectsWithUrl.push({ ...project, cover });
  };

  for (let project of featuredProjects) {
    await searchUrl(project);
  }

  const heroImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/my-site-1aa62.appspot.com/o/hero-anderson.png?alt=media&token=5b8bebae-edf4-41f0-a8ad-7d96b754e1dc";

  return {
    props: { projectsWithUrl, heroImageUrl },
  };
};
