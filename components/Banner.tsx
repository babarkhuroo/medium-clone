function Banner() {
  return (
    <section className='bg-yellow-400 border-b border-black'>
      <div className='flex items-center px-5 md:justify-between max-w-7xl mx-auto'>
        <div className='py-24'>
          <h1 className='font-serif text-7xl pb-8 sm:text-8xl md:text-9xl'>
            Stay curious.
          </h1>
          <p className='text-2xl pb-11 leading-none sm:w-96'>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className='bg-gray-900 text-white text-lg rounded-full px-12 py-2 hover:bg-black'>
            Start reading
          </button>
        </div>
        <div className='hidden md:inline-flex h-max'>
          <h1 className='font-serif text-9xl underline'>M</h1>
        </div>
      </div>
    </section>
  )
}

export default Banner
