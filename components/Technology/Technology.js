import React from 'react'
import TechnologyLayout from '../Layout/TechnologyLayout'
import TechnologyCard from './TechnologyCard/TechnologyCard'
import {motion, AnimatePresence} from "framer-motion"

function Technology() {
  
  const backgroundImage = {
    desktop: '/images/technology/background-technology-desktop.jpg',
    tablet: '/images/technology/background-technology-tablet.jpg',
  }

  return (
    <div>
      <TechnologyLayout backgroundImage={backgroundImage}>
        <AnimatePresence>
          <motion.div
          initial={{opacity: 0, y:15}}
          animate={{opacity: 1, y:0}}
          exit={{opacity: 0, y:15}}
          transition={{delay:0.25, duration:2}}
          >

            <TechnologyCard/>
          </motion.div>
        </AnimatePresence>
      </TechnologyLayout>
    </div>
  )
}

export default Technology