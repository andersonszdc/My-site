import { GetStaticPaths, GetStaticProps } from "next";
import * as runtime from "react/jsx-runtime.js";
import React, { useEffect } from "react";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import MDXComponents from "../../components/content/MDXComponent";
import TableOfContents, {
  HeadingScrollSpy,
} from "../../components/content/TableOfContents";
import useScrollSpy from "../../hooks/useScrollspy";
import styled from "styled-components";
import CustomLink from "../../components/links/CustomLink";
import { SiGithub } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { Frontmatter } from "../../types/frontmatters";
import { storage } from "../../../firebase/config";
import { ref } from "@firebase/storage";
import { getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { runSync } from "@mdx-js/mdx";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: auto 250px;
  gap: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 3.6rem;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Frontmatter = styled.div`
  .front__title {
    margin-top: 0.8rem;
    font-size: 3.6rem;
  }

  .front__description {
    margin: 0.8rem 0;
    font-size: 1.4rem;
  }

  .front__itens {
    display: flex;
    gap: 2.4rem;
  }

  .cover__img {
    border-radius: 0.8rem;
  }
`;

const FrontItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .front__icon {
    font-size: 2rem;
  }
`;

const ProjectAside = styled.aside`
  .wrapper__table {
    position: sticky;
    top: 10rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProjectAll = styled.section`
  margin: 0 4%;
`;

const Divider = styled.hr`
  margin-top: 2.4rem;
`;

type ProjectPageProps = {
  mdxSource: string;
  frontmatter: Frontmatter;
  cover: string;
};

const ProjectPage = ({ mdxSource, frontmatter, cover }: ProjectPageProps) => {
  const activeSection = useScrollSpy();
  const [toc, setToc] = React.useState<HeadingScrollSpy>();

  const { default: Content } = runSync(mdxSource, runtime);

  useEffect(() => {
    const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3");
    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const text = heading.textContent + "";
      headingArr.push({ id, text });
    });
    setToc(headingArr);
  }, []);

  return (
    <ProjectAll>
      <Frontmatter>
        <Image
          alt=""
          src={cover}
          className="cover__img"
          layout="responsive"
          width={1300}
          height={650}
        />
        <h1 className="front__title">{frontmatter.title}</h1>
        <p className="front__description">{frontmatter.description}</p>
        <div className="front__itens">
          {frontmatter.github && (
            <FrontItem>
              <SiGithub className="front__icon" />
              <CustomLink
                onClick={() => console.log("clicou")}
                href={frontmatter.github}
              >
                Repositório
              </CustomLink>
            </FrontItem>
          )}
          {frontmatter.link && (
            <FrontItem>
              <HiLink className="front__icon" />
              <CustomLink
                href={frontmatter.link}
                onClick={() => console.log("clicou")}
              >
                Projeto no ar
              </CustomLink>
            </FrontItem>
          )}
        </div>
      </Frontmatter>
      <Divider />
      <StyledSection>
        <article className="mdx prose projects">
          <Content components={MDXComponents} />
        </article>
        <ProjectAside>
          <div className="wrapper__table">
            <TableOfContents toc={toc} activeSection={activeSection} />
          </div>
        </ProjectAside>
      </StyledSection>
    </ProjectAll>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("projects");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const { mdxSource, data } = await getFileBySlug("projects", slug as string);
  const fileName = data.cover;
  const imageRef = ref(storage, fileName);
  const cover = await getDownloadURL(imageRef);

  return {
    props: { mdxSource, frontmatter: data, cover },
  };
};
