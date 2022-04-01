import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Wrapper } from "./styles";

const Index = () => {
  return (
    <Wrapper>
      <h2 className="call-one h6">Curtiu o meu trabalho?</h2>
      <Link href="/contatos" passHref>
        <div className="call-two">
          <h2 className="call-action h3">
            Vamos trabalhar juntos
            <BsArrowRight className="icon" />
          </h2>
          <span className="span-underline" />
        </div>
      </Link>
    </Wrapper>
  );
};

export default Index;
