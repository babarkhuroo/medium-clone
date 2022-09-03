import { useState, useEffect } from 'react'
import Link from 'next/link'

function Header() {
  const [top, setTop] = useState<Boolean>(true)

  const handleScroll = () => {
    const position = window.scrollY
    if (position > 400) {
      setTop(false)
    } else if (position < 400) {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        top ? 'bg-yellow-400' : 'bg-white'
      } border-b border-black sticky top-0 transition duration-300 ease-linear`}>
      <nav className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
          <Link href='/'>
            <img
              className='w-44 object-contain cursor-pointer'
              src='https://links.papareact.com/yvf'
              alt=''
            />
          </Link>
        </div>
        <div className='flex items-center space-x-5'>
          <a href='#' className='hidden md:flex'>
            Membership
          </a>
          <a href='#' className='hidden md:flex'>
            Our Story
          </a>
          <a href='#' className='hidden md:flex'>
            Write
          </a>
          <a href='#' className='hidden sm:flex'>
            Sign In
          </a>
          <a
            href='#'
            className={`${
              top ? 'bg-black' : 'bg-green-700'
            } text-white px-5 py-2 rounded-full transition duration-300 ease-linear`}>
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
