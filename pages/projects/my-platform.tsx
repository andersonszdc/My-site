import React from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import { ProjectDiv, Separator, TechDiv } from '../../styles/global';
import Image from 'next/image';
import platformImg from '../../assets/platform-login.png';
import styled from 'styled-components';

const MyPlatform: React.FC = () => {
    const infos = {
        title: 'My-platform',
        customer: 'Infoprodutores',
        year: '2021',
    }
    return (
        <ProjectDiv>
            <ProjectHeader infos={infos} />
            <Separator />
            <div className="content">
                <h2 className="content__title">Apresentação</h2>
                <h3 className="content__res">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet elit id velit nulla ac. Urna eu nunc scelerisque elementum nullam. Cras adipiscing porttitor volutpat suspendisse. Arcu curabitur ut sed sollicitudin donec felis ac.</h3>
                <Image className="content__img" src={platformImg} alt="" />
                <h2 className="content__title">Funcionalidades</h2>
                <ul className="content__list">
                    <li className="list__item">Next.js</li>
                    <li className="list__item">Next.js</li>
                    <li className="list__item">Next.js</li>
                </ul>
                <h2 className="content__title">Tecnologias utilizadas</h2>
                <TechDiv>
                    <svg width="75" viewBox="0 0 128 128" fill="white">
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                    </svg>
                    <svg width="75" viewBox="0 0 128 128">
                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                    </svg>
                    <svg width="75" viewBox="0 0 128 128">
                        <path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"></path>
                    </svg>
                </TechDiv>
            </div>
        </ProjectDiv>
    );
}

export default MyPlatform;