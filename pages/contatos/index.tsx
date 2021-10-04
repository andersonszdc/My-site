import React from 'react'
import styled from 'styled-components'
import Forms from '../../components/Forms'

const Wrapper = styled.div`
  display: flex;
  gap: 112px;
  justify-content: center;
  align-items: center;
  padding: 0 4%;
  margin: 60px 0 90px 0;
`

const Infos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .infos_item {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 8px;
    h2 {
      font-size: 24px;
      font-weight: 700;
      color: ${props => props.theme.colors.blue};
    }
    h3 {
      font-size: 16px;
      font-weight: 400;
    }
  }
`

const Contatos: React.FC = () => {
  const onChange = (value: any) => {
    console.log(value)
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <Infos>
        <li className="infos_item">
          <h2>E-mail</h2>
          <h3>andersonszdc@gmail.com</h3>
        </li>
        <li className="infos_item">
          <h2>Celular</h2>
          <h3>+55 (21) 97351-2104</h3>
        </li>
        <li className="infos_item">
          <h2>Cidade</h2>
          <h3>Rio de Janeiro - RJ</h3>
        </li>
      </Infos>
      <Forms />
    </Wrapper>
  )
}

export default Contatos;