import React, { useState } from "react";
import { HGLBtn } from "../../components/button/styles";
import Input from "../../components/form/Input";
import Text from "../../components/form/Text";
import { Wrapper } from "./styles";

export interface WrapperProps {
  loading: boolean;
}

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    to: "",
    message: "",
  });

  const [error, setError] = useState();
  const [sucess, setSucess] = useState();
  const [valueInput, setValueInput] = useState("Enviar");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setValueInput("Enviando...");
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((json) => {
        setError(json.message);
        setSucess(json.sucess);
        setLoading(false);
        setValueInput("Enviar");
      });
  }

  const handleInputChange = (e: any) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Wrapper loading={loading}>
      <form onSubmit={handleSubmit}>
        <Input
          field="name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        <Input
          field="email"
          name="to"
          value={form.to}
          onChange={handleInputChange}
        />
        <Input field="number" />
        <Text
          className="input-message"
          name="message"
          value={form.message}
          onChange={handleInputChange}
        />
        {error && <p className="error">{error}</p>}
        {sucess && <p className="sucess">{sucess}</p>}
        <div className="form__action">
          <HGLBtn>{valueInput}</HGLBtn>
        </div>
      </form>
    </Wrapper>
  );
};

export default Index;
