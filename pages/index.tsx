import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { groq } from 'next-sanity'
import type { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts)

  return (
    <div className=''>
      <Head>
        <title>Medium Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
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
