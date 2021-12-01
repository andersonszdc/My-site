import React, { useState } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  loading: boolean
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10%;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
      margin: 1.8rem 0;
      font-weight: 400;
    }

    .contrast {
      color: ${props => props.theme.colors.blue};
    }

    form {
      display: flex;
      gap: .8rem;
      flex-direction: column;
    }

    .inputs {
      border-radius: .8rem;
      border: 1px solid ${props => props.theme.colors.text};
      padding: 1.4rem;
      font-family: 'Montserrat';
      font-size: 1.4rem;
      background-color: transparent;
      color: ${props => props.theme.colors.text};
    }
    
    .send {
      width: 100%;
      border: none;
      padding: 1.2rem;
      border-radius: .8rem;
      font-size: 1.6rem;
      margin: 1.6rem auto 0 auto;
      font-weight: 600;
      background-color: ${props => props.theme.colors.blue};
      cursor: pointer;
      ${({loading}) => loading ? 'opacity: 0.5' : 'opacity: 1'};
    }
    
    .sucess {
      margin-top: 1.6rem;
      font-size: 1.6rem;
      color: ${props => props.theme.colors.blue};
    }

    .error {
      margin-top: 1.6rem;
      font-size: 1.6rem;
      color: #F21E0C;
    }

    @media (max-width: 400px) {
      h2 {
        font-size: 2.0rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
`

const Forms: React.FC = () => {

    const [ form, setForm ] = useState({
      name: '',
      to: '',
      message: ''
    })

    const [ error, setError ] = useState()
    const [ sucess, setSucess ] = useState()
    const [ valueInput, setValueInput ] = useState("Enviar")
    const [ loading, setLoading ] = useState(false)

    async function handleSubmit(e: any) {
        e.preventDefault()
        setLoading(true)
        setValueInput("Enviando...")
        fetch(process.env.NEXT_PUBLIC_API_URL_EMAIL!, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }).then(res => res.json())
        .then(json => {
          setError(json.message)
          setSucess(json.sucess)
          setLoading(false)
          setValueInput("Enviar")
        })
    }

    const handleInputChange = (e: any) => {
      console.log(e.target.name)
      const {name, value} = e.target
      setForm({
        ...form,
        [name]: value
      })
    }

    return (
        <Wrapper loading={loading} >
            <h2>Fale comigo!</h2>
            <p>Se preferir, envie uma mensagem direta para <span className="contrast">contato@andersonszdc.com</span></p>
            <form onSubmit={handleSubmit}>
              <input
              className='inputs'
              placeholder="nome"
              type="text" name="name"
              value={form.name}
              onChange={handleInputChange}
              />
              <input
              className='inputs'
              placeholder="e-mail"
              type="text" name="to"
              value={form.to}
              onChange={handleInputChange}
              />
              <textarea
              style={{resize: 'none'}}
              className='inputs'
              placeholder="mensagem"
              name="message"
              value={form.message}
              rows={7}
              onChange={handleInputChange}
              />
              {error && <p className="error">{error}</p>}
              {sucess && <p className="sucess">{sucess}</p>}
              <input className='send' type="submit" value={valueInput} />
            </form>
        </Wrapper>
    );
}

export default Forms;