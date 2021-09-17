import React from 'react'
import { Client } from '../../utils/prismic-config'
import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'

interface PathProps {
    params: {
        uid: string
    }
}

interface BlogProps {
    uid: string
}

export const getStaticPaths: GetStaticPaths = async () => {

    const posts = await Client.query(Prismic.Predicates.at('document.type', 'post-blog'))

    const allBlogPosts = []

    posts.results.map((post) => (
      allBlogPosts.push({params: {uid: post.uid} })
    ))

    return {
      paths: allBlogPosts,
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
    const post = await Client.getByUID('post-blog', params.uid, {
      lang: 'pt-br'
    })

    return {
      props: {
        post,
      }
    }
}



const Post: JSX.Element = ({ post }: BlogProps) => {
  console.log(post)
  return (
      <div>
        {RichText.render(post.data.title)}
        {RichText.render(post.data.content)}
      </div>
  );
}

export default Post;