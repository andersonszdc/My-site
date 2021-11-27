import { IoLogoVercel } from 'react-icons/io5';
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const TechsUl = styled.ul`
    display: flex;
    gap: .5rem;
`

const IconLi = styled.li`
    font-size: 2.4rem;
    padding: 1rem 0;
`

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
    techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({className, techs}: TechIconsProps) {
    return (
        <TechsUl>
            {techs.map((tech) => {
                if(!techList[tech]) return;

                const current = techList[tech];

                return (
                    <Tooltip key={current.name} content={<p>{current.name}</p>}>
                        <IconLi>
                            <current.icon />
                        </IconLi>
                    </Tooltip>
                )
            })}
        </TechsUl>
    )
}

const techList = {
    react: {
      icon: SiReact,
      name: 'React',
    },
    nextjs: {
      icon: SiNextDotJs,
      name: 'Next.js',
    },
    tailwindcss: {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
    },
    scss: {
      icon: SiSass,
      name: 'SCSS',
    },
    javascript: {
      icon: SiJavascript,
      name: 'JavaScript',
    },
    typescript: {
      icon: SiTypescript,
      name: 'TypeScript',
    },
    nodejs: {
      icon: SiNodeDotJs,
      name: 'Node.js',
    },
    firebase: {
      icon: SiFirebase,
      name: 'Firebase',
    },
    mongodb: {
      icon: SiMongodb,
      name: 'MongoDB',
    },
    swr: {
      icon: IoLogoVercel,
      name: 'SWR',
    },
    redux: {
      icon: SiRedux,
      name: 'Redux',
    },
    mdx: {
      icon: SiMarkdown,
      name: 'MDX',
    },
    prettier: {
      icon: SiPrettier,
      name: 'Prettier',
    },
    analytics: {
      icon: SiGoogleanalytics,
      name: 'Google Analytics',
    },
    git: {
      icon: SiGit,
      name: 'Git',
    },
    notion: {
      icon: SiNotion,
      name: 'Notion API',
    },
  };