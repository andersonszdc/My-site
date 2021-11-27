import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
    text-align: center;
    margin: 9rem 0;
    .call-one {
        font-size: 1.6rem;
        font-weight: 600;
    }
    .call-two {
        color: ${props => props.theme.colors.blue};
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        gap: .6rem;
        cursor: pointer;
        :hover span {
            width: 100%;
        }
    }
    .call-action {
        display: inline-flex;
        align-items: center;
        gap: 1.2rem;

        margin-top: 1.2rem;

        font-size: 3.6rem;
        font-weight: 700;

    }
    span {
        background-color: ${props => props.theme.colors.blue};
        display: block;
        width: 0%;
        height: .5rem;
        transition: .4s ease-in-out;
        border-radius: .6rem;
    }

    @media (max-width: 600px) {
        .call-one {
            font-size: 1.4rem;
        }
        .call-action {
            font-size: 2.4rem;
        }
    }

    @media (max-width: 400px) {
        margin: 3.2rem 0;
        .call-one {
            font-size: 1.2rem;
        }
        .call-action {
            font-size: 1.8rem;
        }
    }
`

const CallMe: React.FC = () => {
  return (
      <Wrapper>
          <h2 className='call-one'>Curtiu o meu trabalho?</h2>
          <Link href='/contatos' passHref>
            <div className='call-two'>
                <h2 className="call-action">Vamos trabalhar juntos<BsArrowRight/></h2>
                <span/>
            </div>
          </Link>
      </Wrapper>
  );
}

export default CallMe;