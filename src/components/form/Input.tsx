import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  field: "name" | "email" | "number" | "message";
}

const values = {
  name: {
    label: "Nome",
    id: "name",
    placeholder: "John Doe",
  },
  email: {
    label: "E-mail",
    id: "email",
    placeholder: "john.doe@gmail.com",
  },
  number: {
    label: "WhatsApp",
    id: "number",
    placeholder: "(00) 0 0000-0000",
  },
  message: {
    label: "Mensagem",
    id: "message",
    placeholder: "Eu gostaria de fazer um orçamento!",
  },
};

const Input: React.FC<InputProps> = ({
  field,
  value,
  onChange,
  name,
  className,
}) => {
  const [currentValues, setCurrentValues] = useState<typeof values.email>();
  useEffect(() => {
    switch (field) {
      case "name":
        setCurrentValues(values.name);
        break;
      case "email":
        setCurrentValues(values.email);
        break;
      case "number":
        setCurrentValues(values.number);
        break;
      case "message":
        setCurrentValues(values.message);
        break;
      default:
        console.log("field unavailable");
    }
  }, [setCurrentValues, field]);
  return currentValues ? (
    <Wrapper className={className}>
      <label className="p3" htmlFor={currentValues.id}>
        {currentValues.label}
      </label>
      <input
        type="text"
        id={currentValues.id}
        name={name}
        className="input p3"
        placeholder={currentValues.placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  ) : null;
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  .input {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    padding-left: 3.2rem;
    ::placeholder {
      transition: 0.3s ease-in-out;
    }
    :hover::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
