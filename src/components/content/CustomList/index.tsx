import React from "react";
import { List } from "./styles";

type CustomListProps = {
  children: React.ReactNode;
};

const CustomList = ({ children }: CustomListProps) => {
  return <List>{children}</List>;
};

export default CustomList;
