import React from 'react'
import styled from 'styled-components'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0 4% 80px 4%;
  align-items: center;
  
  @media (orientation: landscape) {
    min-height: calc(100vh - 80px);
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: normal;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 3.2rem;
    padding-bottom: 0;
  }
`

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: .5s cubic-bezier(.3,0,.5,1);

  .name {
    color: ${props => props.theme.colors.blue};
    font-size: 1.8rem;
    font-weight: 500;
  }

  .function {
    font-size: 3.6rem;
  }

  .description {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .hero_icons {
    margin-top: .8rem;
    font-size: 3.2rem;
    display: flex;
    gap: 3.2rem;

    a {
      display: inline-flex;
      color: ${props => props.theme.colors.blue};
      text-decoration: none;
    }
  }

  @media (max-width: 700px) {
    .name {
      font-size: 1.2rem;
    }
    .function {
      font-size: 2.4rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 400px) {
    .name {
      font-size: 1rem;
    }
    .function {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
    }
    .hero_icons {
      font-size: 2.4rem;
    }
  }
`

const HeroImage = styled.div`
  display: inline-flex;
  justify-content: center;

  > div {
    width: 500px;
  }

  @media (max-width: 1500px) {
    > div {
      width: 300px;
    }
  }

  @media (max-width: 500px) {
    > div {
      width: 200px;
    }
  }
`

const Hero: React.FC = () => {
    return (
        <Wrapper>
          <HeroInfo>
            <h2 className='name'>Anderson Souza</h2>
            <h1 className='function'>Desenvolvedor Front-end e<br/>User Interface Designer</h1>
            <p className='description'>Um estudante que relata sua trajetória e<br/>descobertas por este mundo.</p>
            <div className='hero_icons'>
              <a title='Ir para o Instagram (link externo)' target='_blank' rel='noreferrer' href="https://www.instagram.com/andersonszdc/">
                <GrInstagram title='ícone Github' />
              </a>
              <a title='Ir para o Github (link externo)' target='_blank' rel='noreferrer' href="https://github.com/andersonszdc">
                <VscGithub title='ícone Github' />
              </a>
              <a title='Ir para o Linkedin (link externo)' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/anderson-souza-b28431198/">
                <FaLinkedin title='ícone Github' />
              </a>
            </div>
          </HeroInfo>
          <HeroImage>
            <div>
              <svg width="100%" viewBox="0 0 368 409" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_337:85" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="100%">
                  <path d="M350.924 155.13C374.511 261.393 377.151 312.584 324.652 364.663C271.772 416.743 149.179 430.42 79.1799 364.663C9.18077 298.906 -11.5107 274.837 7.89128 176.991C27.2932 79.1441 106.916 -5.50634 186.806 0.280275C266.316 6.0669 327.337 49.3922 350.924 155.13Z" fill="#16D3E4"/>
                </mask>
                <g mask="url(#mask0_337:85)">
                  <path d="M350.924 155.13C374.511 261.393 377.151 312.584 324.652 364.663C271.772 416.743 149.179 430.42 79.1799 364.663C9.18077 298.906 -11.5107 274.837 7.89128 176.991C27.2932 79.1441 106.916 -5.50634 186.806 0.280275C266.316 6.0669 327.337 49.3922 350.924 155.13Z" fill="#16D3E4"/>
                  <image id="image0_337:85" height="100%" xlinkHref="https://lh3.googleusercontent.com/A2SQc8DxIK2SMVe2X02f4yQYZI8C30cfnWiE02jJdOftXv47ssxuStWc96InqOGZ4_3OmSp5b4Afd4E9FiWDK0DssGZ71nPnhe3UmfRCyQnX_XdwcwnzjCvQ-AcrJ-zDHmSqEjDciAfACG3pC4I2vLl1cuCubjtjQNPYAUoFgAlGV5vT-_haMip416u1PGSKoloDpSBKGgqFErIXxtDH7o3yqqSiNnr83Ma5e_F68dcGa6sAUwCBkpDcnjMB1M9AUXi0ErCtMuN2sOZCSsMnZL9-vvPGnBdpcjQ1dyxfTcut_UkxdTYWvCl_sAq3P5wvVYemCD_45GSExqptY8tZ87w4d7Af2RJV7bbWPM-l20nWHIOiAqp7v13SG48HRW4H40SjUd5G58Ry5PkdAvQ8b4pXOXFvBtf-GczpLJceyqvFQOQO7xcFSEK3WfgeH8aP4_Pw08ZG5qGdh1JBloJp7Bqmkd2vlTxMNwJ96XJFflNIJ_Xd_rwElhulNPzrAPaq5QzbfGtJU1Xyr4OZvvup5hPZv1iCS138ivfnmvZiBYpPe-Pvl4bj13p9B5pmjYMgE5ugVrrGJ6vCfmsngyOzUhqmG8VO0K2VFG06Xg5kO7rtXR6kUL2jN3FD1q08XufCfi5IPvVPkcByaj0nqWWCVwDE5n50-T_cbZD_r9SOEGMO6nD8a1mJie0btSQ3U57wr4CQJwDGKpfq00lvMIEdEw4=w939-h995-no?authuser=0"/>
                </g>
              </svg>
            </div>
          </HeroImage>
      </Wrapper>
    );
}

export default Hero;