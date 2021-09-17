import Prismic from '@prismicio/client'

const apiEndpoint = 'https://blog-andersonszdc.prismic.io/api/v2'
export const Client = Prismic.client(apiEndpoint)