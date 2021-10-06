import React from 'react'
import { Client } from '../../utils/prismic-config'
import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'
import {Document} from '@prismicio/client/types/documents'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import styled from 'styled-components'
import perfilImg from '../../assets/selfie-anderson.png'

interface PathProps {
  params: {
    uid: string
  }
}
interface BlogProps {
  post: Document
}

export const getStaticPaths: GetStaticPaths = async () => {

    const posts = await Client.query(Prismic.Predicates.at('document.type', 'post-blog'))

    const allBlogPosts: any[] = []

    posts.results.map((post) => (
      allBlogPosts.push({params: {uid: post.uid} })
    ))

    return {
      paths: allBlogPosts,
      fallback: false
    }
}

export const getStaticProps = async ({ params }: PathProps) => {
    const post = await Client.getByUID('post-blog', params.uid, {
      lang: 'pt-br'
    })

    return {
      props: {
        post,
      }
    }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4%;
  margin: 3.2rem auto;
  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.8rem;
    }
  }
`

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
  margin-bottom: 2.4rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .post_info, .post_autor {
    display: flex;
    align-items: center;
  }

  .post_info {
    gap: 3.2rem;
  }

  .post_autor {
    gap: .8rem;
  }
`

const Markdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  margin: 0 auto;
  max-width: 640px;
  p {
    font-size: 1.8rem;
    line-height: 150%;
  }

  @media (max-width: 600px) {
    p {
      font-size: 1.6rem;
    }
  }
`

const Post = ({ post }: BlogProps) => {

  console.log(post)

  const rawMarkdown = RichText.asText(post.data.markdown)
  
  const renderers = {
    img: (image: any) => {
        return <Image className='imagem' src={image.src} alt={image.alt} height="800" width="1280" />
    },
    p: (paragraph: any) => {
        const { node } = paragraph;
        if (node.children[0].tagName === "img") {
          return paragraph.children
        }
        return <p>{paragraph.children}</p>
      }
  }

  return post && (
      <Wrapper>
        <PostHeader>
          {RichText.render(post.data.title)}
          <div className="post_info">
            <div className="post_autor">
              <Image src={perfilImg} alt='perfil' />
              <h4>Anderson</h4>
            </div>
            {RichText.render(post.data.data)}
            {RichText.render(post.data.min)}
          </div>
        </PostHeader>
        <Markdown>
          <ReactMarkdown components={renderers}>
            {rawMarkdown}
          </ReactMarkdown>
        </Markdown>
      </Wrapper>
  );
}

export default Post;