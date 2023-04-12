import React from 'react'
import CrewLayout from '../Layout/CrewLayout'
import CrewMembers from './CrewMembers/CrewMembers'
import {motion, AnimatePresence} from "framer-motion"

function Crew() {
  
  const backgroundImage = {
    desktop: '/images/crew/background-crew-desktop.jpg',
    tablet: '/images/crew/background-crew-tablet.jpg',
  }

  return (
    <div>
      <CrewLayout backgroundImage={backgroundImage}>
        <AnimatePresence>
          <motion.div
          initial={{opacity:  0, y: 15}}
          animate={{opacity:  1, y: 0}}
          exit={{opacity: 0, y:  15}}
          transition={{delay: 0.25, duration:2}}
          >
            <CrewMembers/>
          </motion.div>
        </AnimatePresence>
    
      </CrewLayout>
    </div>
  )
}

export default Crew