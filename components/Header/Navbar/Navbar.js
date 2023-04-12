import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from "./NavBar.module.css"
import { motion, AnimatePresence } from 'framer-motion'



function Navbar({mdActive, index, setMdActive, handleClick}) {
  
  const [isActive, setIsActive] = useState(false)
  const [menuKey, setMenuKey] = useState(0)
  
  const menu = () =>{
    setIsActive(!isActive)
  }

  useEffect(()=>{
    const path = window.location.pathname
    if (path === '/') {
      setMdActive(0)
    } else if (path === '/destination') {
      setMdActive(1)
    } else if (path === '/crew') {
      setMdActive(2)
    } else if (path === '/technology') {
      setMdActive(3)
    }

  }, [index])



  const variants = {

    show:{
      opacity:1,
      transition: {
        staggerChildren:0.3,
      },
    },
  }
  
  const links = {
    hidden:{
      opacity: 1,
      x:30,
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:2,
      },
    }
  }


  return (
    <div className="">
      <img onClick={()=>menu()} className="md:hidden md:static               fixed cursor-pointer right-5 top-5" src="/images/shared/icon-hamburger.svg"/>
      <div className={`lg:z-10 lg:mt-8 lg:w-2/4 lg:bg-gradient-to-r lg:from-slate-900 lg:to-slate-900 lg:via-white/20 lg:backdrop-opacity-20 lg:opacity-670   md:bg-gradient-to-br md:from-slate-900 md:to-slate-300/25 md:backdrop-filter backdrop-saturate-150 md:backdrop-blur-lg md:pl-16 md:h-fit bg-gray-900/60 md:flex  ${isActive ? "" : "hidden" } backdrop-blur z-50 w-3/4 h-full fixed top-0 bottom-0 right-0`}>
        <div className=" md:static     text-white sticky top-0  ">
          <div className="md:static        absolute right-9 top-5">
            <img onClick={()=> menu()} className="md:hidden        cursor-pointer" src="/images/shared/icon-close.svg"/>
          </div>
          <div className="lg:block opacity-50 -left-2/3 lg:z-20 top-12 w-3/4 absolute bg-white h-1 hidden"></div>
          <AnimatePresence >

            <motion.nav 
              variants={variants}
              animate={isActive ? "show" : "hidden"}
              className="lg:h-24   lg:gap-10 md:h-32 md:items-center md:pr-8  md:static md:flex-row md:text-2xl md:z-20 md:text-white        fixed left-5 top-24  flex gap-5 flex-col list-none"
              >
              
              <motion.li onClick={()=> handleClick(0)}
                variants={links}
                >
                <div className={`${mdActive === 0 ? " md:w-16 md:h-3  md:absolute md:-bottom-8 md:bg-cyan-50" : "" }`} ></div>
                <Link className="" href='./' >
                  <span className="md:hidden">00 </span>Home
                </Link>
              </motion.li>
              <motion.li onClick={()=> handleClick(1)} className=""
                variants={links}
                >
                <div className={`${mdActive === 1 ? " md:w-28 md:h-3 md:absolute md:-bottom-8 md:bg-cyan-50" : "" }`} ></div>
                <Link   href='./destination'>
                  <span className="md:hidden">01</span> Destination
                </Link>
              </motion.li>
              <motion.li onClick={()=> handleClick(2)} className=""
                variants={links}
                >
                <div className={`${mdActive == 2 ? " md:w-16 md:h-3 md:absolute md:-bottom-8 md:bg-cyan-50" : "" }`} ></div>
                <Link  href='./crew'>
                <span className="md:hidden">02</span> Crew
                </Link>
              </motion.li>
              <motion.li onClick={()=> handleClick(3)} className=""
                variants={links}
                >
                <div className={`${mdActive === 3 ? " md:w-32 md:h-3 md:absolute md:-bottom-8 md:bg-cyan-50" : "" }`} ></div>
                <Link  href='./technology'>
                <span className="md:hidden">03 </span>Technology
                </Link>
              
              </motion.li>
            </motion.nav>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Navbar