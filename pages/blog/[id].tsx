import React from 'react'
import { Client } from '../../utils/prismic-config'
import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'

interface PathProps {
    params: {
        id: string
    }
}

interface BlogProps {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [{
        params: {
          id: 'typescript'
        }
      },{
        params: {
          id: '2'
        }
      }],
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
    const id = params.id

    return {
      props: {
        id: id
      }
    }
}



const Post: JSX.Element = ({ id }: BlogProps) => {
  return (
      <div>Id: {id}</div>
  );
}

export default Post;