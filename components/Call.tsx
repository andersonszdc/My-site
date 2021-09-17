import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
    text-align: center;
    margin: 90px 0;
    .call-one {
        font-size: 18px;
    }
    .call-two {
        color: ${props => props.theme.colors.blue};
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        cursor: pointer;
        h2 {
            display: inline-flex;
            align-items: center;
            font-size: 45px;
            margin-top: 12px;
            gap: 12px;
        }
        :hover span {
            background-color: ${props => props.theme.colors.blue};
        }
    }
    span {
        display: block;
        width: 100%;
        height: 5px;
        transition: .4s ease-in-out;
        border-radius: 6px;
    }
`

const CallMe: React.FC = () => {
  return (
      <Wrapper>
          <h2 className='call-one'>Curtiu o meu trabalho?</h2>
          <Link href='/contatos' passHref>
            <div className='call-two'>
                <h2>Vamos Trabalhar juntos<BsArrowRight/></h2>
                <span/>
            </div>
          </Link>
      </Wrapper>
  );
}

export default CallMe;