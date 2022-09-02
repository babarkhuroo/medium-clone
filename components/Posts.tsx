import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import type { Props } from '../pages/index'
import type { Post } from '../typings'

const Posts = ({ posts }: Props) => {
  console.log(posts)

  return (
    <section>
      {posts.map((post: Post) => {
        return (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <h1>{post.title}</h1>
          </Link>
        )
      })}
    </section>
  )
}

export default Posts
