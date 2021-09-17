import React from 'react'
import styled from 'styled-components'
import Prismic from '@prismicio/client'
import { Client } from '../../utils/prismic-config'
import { GetStaticProps } from 'next'
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import Link from 'next/Link'

interface PropTypes {
  post?: ApiSearchResponse
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 4%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  .card {
    display: flex;
    align-items: center;
    gap: 24px;
    cursor: pointer;
  }
`

const Blog: JSX.Element = ({posts}: PropTypes) => {
  return (
    <Wrapper>
      <Content>
        {posts.results.map((post: any) => (
          <Link
          href={{
            pathname: '/blog/[id]',
            query: {id: 'typescript'},
          }}
            key={post.id}>
            <div className='card'>
              <Image height={post.data.image.dimensions.height} width={post.data.image.dimensions.width} layout='intrinsic' alt={RichText.asText(post.data.image.alt)} src={post.data.image.url} />
              {RichText.render(post.data.title)}
            </div>
          </Link>
        ))}
      </Content>
    </Wrapper>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {

  const posts = await Client.query(Prismic.Predicates.at('document.type', 'post-blog'))

  return {
    props: {
      posts
    }
  }
}