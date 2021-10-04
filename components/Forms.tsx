import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 45px;
    width: 600px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 20px;
    box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 1), -6px -6px 12px 0px rgba(255, 255, 255, 0.3);
    h2 {
      font-size: 32px;
      margin-bottom: 30px;
      text-align: center;
      color: ${props => props.theme.colors.blue};
    }
    form {
      display: flex;
      gap: 8px;
      flex-direction: column;
      .inputs {
        border-radius: 8px;
        border: none;
        padding: 14px;
        font-family: 'Montserrat';
        font-size: 14px;
        box-shadow: 6px 6px 12px 0px rgba(43, 35, 35, 0.7) inset;
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
        box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 1), -3px -3px 6px 0px rgba(255, 255, 255, 0.3);
      }
    }
`

const Forms: React.FC = () => {

    async function handleSubmit(e: any) {
        e.preventDefault()
    }

    return (
        <Wrapper>
            <h2>Fale comigo!</h2>
            <form onSubmit={handleSubmit} action="">
            <input className='inputs' placeholder="nome" type="text" />
            <input className='inputs' placeholder="e-mail" type="text" />
            <textarea style={{resize: 'none'}} className='inputs' placeholder="mensagem" cols={30} rows={7}></textarea>
            <input className='send' type="submit" />
            </form>
        </Wrapper>
    );
}

export default Forms;