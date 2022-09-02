import type { NextPage } from 'next'
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Posts from '../components/Posts'
import type { Post } from '../typings'

export interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className=''>
      <Head>
        <title>Medium Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
      <Posts posts={posts} />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = groq`
  *[_type == 'post'] {
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }
  `

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
