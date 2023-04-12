import React from 'react'
import Layout from '../Layout/Layout'
import HomePageHero from './HomePageHero/HomePageHero'
import {motion, AnimatePresence} from "framer-motion" 

function HomePage() {
  
  const backgroundImage = {
    desktop: '/images/home/background-home-desktop.jpg',
    tablet: '/images/home/background-home-tablet.jpg',
  }

  return (
    <div>
      <Layout backgroundImage={backgroundImage}>
        <AnimatePresence>
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 15}}
            transition={{delay: 0.25, duration:2}}
          >
            <HomePageHero/>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default HomePage