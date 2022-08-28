import Link from 'next/link'

function Header() {
  return (
    <nav className='bg-yellow-400 border-b border-black sticky top-0'>
      <header className='flex justify-between p-5 max-w-7xl mx-auto'>
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
          <a href='#' className='text-white bg-black px-5 py-2 rounded-full'>
            Get Started
          </a>
        </div>
      </header>
    </nav>
  )
}

export default Header
