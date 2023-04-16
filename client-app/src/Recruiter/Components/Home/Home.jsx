import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Features from './Features'

function Home() {
  return (
    <div className='bg-lightBlue'>
      <Hero />
      <div className='my-5 md:w-4/5 m-auto rounded-md '>
        <Features />
        {/* <Pricing/> */}
      </div>

    </div>
  )
}

export default Home