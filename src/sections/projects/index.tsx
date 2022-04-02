import React from "react";
import Card from "../../components/project/Card";
import Link from "next/link";
import { Frontmatter } from "../../types/frontmatters";
import { Wrapper } from "./styles";
import Button from "../../components/button";

type ProjectsProps = {
  projects: Frontmatter[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Wrapper
      id="projects"
      initial={{ opacity: 0, y: "100" }}
      whileInView={{ opacity: 1, y: "0" }}
      transition={{ duration: .75 }}
    >
      <h2 data-fade="1" id="projects_title" className="projects_title h3">
        Projetos
      </h2>
      <div data-fade="2" className="projects__cards">
        {projects.map((project: any, index: number) => (
          <Card data={project} key={index} />
        ))}
      </div>
      <Link passHref href="/projects">
        <div data-fade="3">
          <Button>Ver mais projetos</Button>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Projects;
