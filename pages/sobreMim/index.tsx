import React from 'react'
import aboutImg from '../../assets/aboutme.png'
import Image from 'next/image'
import styled from 'styled-components'
import Skill from '../../components/Skill'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.2rem 4% 9rem 4%;
  align-items: center;
  gap: 48px;
  
  h2 {
    font-size: 2.4rem;
    color: ${props => props.theme.colors.blue};
  }

  .about_skills {
    margin-top: 4.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.4rem;
  }

  @media (max-width: 800px) {
    .about_skills {
      grid-template-columns: 1fr;
    }
  }
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;

  .about_text {
    font-size: 1.6rem;
    line-height: 133%;
  }

  .about_card {
    display: inline-flex;
    box-shadow: rgb(0 0 0) 4px 4px 8px 0px, rgb(255 255 255 / 30%) -4px -4px 8px 0px;
    border-radius: 16px;
  }

  .about_img {
      border-radius: 16px;
  }

  @media (max-width: 800px) {
  grid-template-columns: 1fr;
  }
`

const sobreMim: React.FC = () => {
  return (
      <Wrapper>
        <h2>Sobre mim</h2>
        <Intro>
          <div className="about_card">
            <Image className="about_img" alt='Anderson' src={aboutImg} />
          </div>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel dui vitae, urna duis ut gravida placerat. Nunc rhoncus id ornare neque sed sagittis. Eget leo leo fermentum, velit. Varius habitant sit convallis viverra non dolor massa augue.
          </p>
        </Intro>
        <div className="about_skills">
          <Skill title="Front-end" skills={['React', 'NextJS']} active={true} />
          <Skill title="Back-end" skills={['NodeJS', 'NextJS', 'Prismic/Shopify']} active={false} />
        </div>
      </Wrapper>
  )
}

export default sobreMim;