import React from "react";
import styled from "styled-components";

const Text: React.FC<React.HTMLProps<HTMLTextAreaElement>> = ({
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <label className="p3" htmlFor="text">
        Mensagem
      </label>
      <textarea
        id="text"
        name={name}
        className="textarea p3"
        placeholder="Eu gostaria de fazer um orçamento!"
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  .textarea {
    resize: none;
    min-height: 12rem;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    padding: 1.6rem;
    ::placeholder {
      transition: 0.3s ease-in-out;
    }
    :hover::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
