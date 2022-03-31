import { GetStaticProps } from "next";
import React from "react";
import { getAllFilesFrontmatter } from "../../lib/mdx";
import { Frontmatter } from "../../types/frontmatters";
import Card from "../../components/project/Card";
import { getDownloadURL, ref } from "@firebase/storage";
import { storage } from "../../../firebase/config";
import styled from "styled-components";

type IndexProps = {
  projects: Frontmatter[];
};

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  margin: 2.4rem 0;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 4%;

  .projects__title {
    font-size: 2.4rem;
    font-weight: 700;
  }

  .projects__subtitle {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 0.8rem;
  }
`;

const Index = ({ projects }: IndexProps) => {
  return (
    <Wrapper>
      <h1 className="projects__title">Projetos</h1>
      <h2 className="projects__subtitle">
        Projetos pessoais, de clientes e estudos de caso.
      </h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <Card data={project} key={index} />
        ))}
      </ProjectsGrid>
    </Wrapper>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllFilesFrontmatter("projects");

  let projectsWithUrl: Frontmatter[] = [];

  const searchUrl = async (project: Frontmatter) => {
    const fileName = project.cover;
    const imageRef = ref(storage, fileName);
    const cover = await getDownloadURL(imageRef);
    projectsWithUrl.push({ ...project, cover });
  };

  for (let project of projects) {
    await searchUrl(project);
  }

  return {
    props: { projects: projectsWithUrl },
  };
};
