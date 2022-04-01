import React, { useState } from "react";
import { Btn, HGLBtn } from "../../components/button/styles";
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
      <h2 className="h5">Fale comigo!</h2>
      <p className="p2">
        Se preferir, envie uma mensagem direta para{" "}
        <span className="contrast">contato@andersonszdc.com</span>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="inputs"
          placeholder="nome"
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          className="inputs"
          placeholder="e-mail"
          type="text"
          name="to"
          value={form.to}
          onChange={handleInputChange}
        />
        <textarea
          style={{ resize: "none" }}
          className="inputs"
          placeholder="mensagem"
          name="message"
          value={form.message}
          rows={7}
          onChange={handleInputChange}
        />
        {error && <p className="error">{error}</p>}
        {sucess && <p className="sucess">{sucess}</p>}
        <HGLBtn>{valueInput}</HGLBtn>
      </form>
    </Wrapper>
  );
};

export default Index;
