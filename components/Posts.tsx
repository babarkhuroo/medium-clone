import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import type { Props } from '../pages/index'
import type { Post } from '../typings'

const Posts = ({ posts }: Props) => {
  console.log(posts)

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
      {posts.map((post: Post) => {
        return (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img
                className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={urlFor(post.mainImage).url()}
                alt={post.title}
              />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className='h-12 w-12 rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                />
              </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Posts
