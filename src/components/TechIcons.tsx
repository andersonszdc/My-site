import {
  SiFigma,
  SiFirebase,
  SiExpress,
  SiGoogleanalytics,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiGatsby,
  SiGraphql,
  SiAmazonaws,
} from "react-icons/si";
import styled from "styled-components";

type iconLiProps = {
  size: string;
  padding: string;
};

const TechsUl = styled.ul`
  display: flex;
`;

const IconLi = styled.li<iconLiProps>`
  font-size: ${(props) => props.size};
  padding: ${(props) => props.padding};
`;

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  gap?: string;
  size?: string;
  padding?: string;
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<"ul">;

export default function TechIcons({ techs, size, padding }: TechIconsProps) {
  return (
    <TechsUl>
      {techs.map((tech, index) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <IconLi
            key={index}
            padding={padding ?? ".5rem"}
            size={size ?? "2.4rem"}
          >
            <current.icon />
          </IconLi>
        );
      })}
    </TechsUl>
  );
}

const techList = {
  styledComponents: {
    icon: SiStyledcomponents,
    name: "Styled-components",
  },
  react: {
    icon: SiReact,
    name: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  javascript: {
    icon: SiJavascript,
    name: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    name: "TypeScript",
  },
  nodejs: {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  firebase: {
    icon: SiFirebase,
    name: "Firebase",
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: "Google Analytics",
  },
  figma: {
    icon: SiFigma,
    name: "Figma",
  },
  express: {
    icon: SiExpress,
    name: "Express",
  },
  gatsby: {
    icon: SiGatsby,
    name: "Gatsby",
  },
  graphql: {
    icon: SiGraphql,
    name: "Gatsby",
  },
  aws: {
    icon: SiAmazonaws,
    name: "AWS",
  },
};
