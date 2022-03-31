import React from "react";
import InView from "../../lib/inView";
import Card from "../../components/project/Card";
import Link from "next/link";
import { Frontmatter } from "../../types/frontmatters";
import { SeeMore, Wrapper } from "./styles";

export type WrapperProps = {
  inView: boolean;
};

type ProjectsProps = {
  projects: Frontmatter[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <InView>
      {(inView) => (
        <Wrapper id="projects" inView={inView}>
          <h2 data-fade="1" id="projects_title" className="projects_title">
            Projetos
          </h2>
          <div data-fade="2" className="projects__cards">
            {projects.map((project: any, index: number) => (
              <Card data={project} key={index} />
            ))}
          </div>
          <Link passHref href="/projects">
            <div data-fade="3">
              <SeeMore>Ver mais projetos</SeeMore>
            </div>
          </Link>
        </Wrapper>
      )}
    </InView>
  );
};

export default Projects;
