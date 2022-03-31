import Image from "next/image";
import TechIcons from "../../techIcons";
import CustomLink from "../../links/CustomLink";
import CustomList from "../CustomList";

const MDXComponents = {
  a: CustomLink,
  // Image,
  // pre: Pre,
  // code: CustomCode,
  TechIcons,
  ul: CustomList,
};

export default MDXComponents;
