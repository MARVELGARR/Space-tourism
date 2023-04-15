import React, {useState} from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

function HomePageHero() {

  return (
    <div className="lg:mt-64 lg:flex h-screen lg:border-lime-300 lg:flex-row lg:gap-10  md:pl-28 md:gap-20 md:pr-28 flex flex-col gap-10 mb-56 justify-center items-center">
      <div className="lg:text-left lg:basis-2/4 lg:flex-wrap      md:flex md:gap-8 pl-2 pr-3 text-white text-center mt-40 flex flex-col gap-5 z-10">
        <h4 className="text-xl">SO, YOU WANT TO TRAVEL TO</h4>
        <h1 className="md:text-9xl  text-6xl font-bellefair">SPACE</h1>
        <p className="font-barlow md:tracking-widest flex-wrap md:leading-10 text-xl">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="lg:basis-2/5 lg:w-96 lg:h-96  bg-white  w-60 h-60 rounded-full rounded-t-full flex justify-center items-center cursor-pointer shadow-lg drop-shadow-lg font-semibold opacity-5 hover:opacity-100 transition-opacity duration-500">
        <Link href="/destination">
          <span className="text-black">EXPLORE</span>
        </Link>
      </div>
    </div>
  )
}

export default HomePageHero