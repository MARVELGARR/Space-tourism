import React from 'react'
import DestinationLayout from '../Layout/DestinationLayout'
import DestinationHero from './DestinationHero/DestinationHero'
import {motion, AnimatePresence} from "framer-motion"

function Destination() {

  const backgroundImage = {
    desktop: '/images/destination/background-destination-desktop.jpg',
    tablet: '/images/destination/background-destination-tablet.jpg',
  }

  return (
    <div>
      <DestinationLayout backgroundImage={backgroundImage}>
        <AnimatePresence>
          <motion.div
          initial={{opacity: 0, y:15}}
          animate={{opacity: 1, y:0}}
          exit={{opacity: 0, y:15}}
          transition={{delay:0.25, duration:2}}
          >

            <DestinationHero/>
          </motion.div>
        </AnimatePresence>
      </DestinationLayout>
        
    </div>
  )
}

export default Destination