import React from 'react'
import aboutImg from '../../assets/aboutme-anderson.png'
import Image from 'next/image'
import styled from 'styled-components'
import Skill from '../../components/Skill'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 4%;
  align-items: center;
  gap: 48px;
`

const Intro = styled.div`
  display: flex;
  gap: 64px;
`

const sobreMim: React.FC = () => {
  return (
      <Wrapper>
        <h2>Sobre mim</h2>
        <Intro>
          <Image  className="about_img" alt='Anderson' src={aboutImg} />
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel dui vitae, urna duis ut gravida placerat. Nunc rhoncus id ornare neque sed sagittis. Eget leo leo fermentum, velit. Varius habitant sit convallis viverra non dolor massa augue.
          </p>
        </Intro>
        <div>
          <Skill />
        </div>
      </Wrapper>
  )
}

export default sobreMim;