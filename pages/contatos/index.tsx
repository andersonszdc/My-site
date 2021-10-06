import React from 'react'
import styled from 'styled-components'
import Forms from '../../components/Forms'

const Wrapper = styled.div`
  display: flex;
  gap: 11.2rem;
  justify-content: center;
  align-items: center;
  padding: 0 7%;
  margin: 4.8rem 0 9rem 0;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 4.8rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 3.2rem;
  }
`

const Infos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  .infos_item {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: .8rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${props => props.theme.colors.blue};
    }
    
    h3 {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`

const Contatos: React.FC = () => {

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