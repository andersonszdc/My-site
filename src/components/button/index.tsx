import React from "react";
import { Btn } from "./styles";

interface ButtonProps {
  text: string;
}

const Button = ({ children }: any) => {
  return <Btn>{children}</Btn>;
};

export default Button;
