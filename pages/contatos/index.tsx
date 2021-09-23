import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 4%;
  margin: 60px 0;
  .forms {
    display: flex;
    flex-direction: column;
    padding: 45px;
    width: 600px;
    background-color: #9D9797;
    border-radius: 20px;
    h2 {
      font-size: 32px;
      margin-bottom: 30px;
      text-align: center;
      // color: ${props => props.theme.colors.blue};
    }
    form {
      display: flex;
      gap: 8px;
      flex-direction: column;
      .inputs {
        border-radius: 3px;
        border: none;
        padding: 14px;
        font-family: 'Montserrat';
        font-size: 14px;
      }
      .send {
        width: 50%;
        border: none;
        padding: 12px;
        border-radius: 8px;
        font-size: 16px;
        margin: 16px auto 0 auto;
        font-weight: 600;
        background-color: ${props => props.theme.colors.blue};
        cursor: pointer;
      }
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
      <div className='forms'>
        <h2>Fale comigo!</h2>
        <form onSubmit={handleSubmit} action="">
          <input className='inputs' placeholder="nome" type="text" />
          <input className='inputs' placeholder="e-mail" type="text" />
          <textarea style={{resize: 'none'}} className='inputs' placeholder="mensagem" cols={30} rows={10}></textarea>
          <input className='send' type="submit" />
        </form>
      </div>
    </Wrapper>
  )
}

export default Contatos;