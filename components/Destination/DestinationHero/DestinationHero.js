import React, {useState} from 'react'
import { siteData } from '@/public/siteData'
import {motion, AnimatePresence} from "framer-motion"

function DestinationHero() {

  const variants = {
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition: {
        staggerChildren:0.3,
      },
    },
  }

  const Destination = {
    hidden:{
      opacity:0,
      x:30  
    },
    show: {
      opacity:1,
      x:0,
      transition:{
        delay:0.25,
        duration: 2
      }
    }
  }
  

  
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) =>{
    setIsActive(index);  
  }

  return (
    <div className="lg:full mb-40   lg:flex-row lg:h-screen lg:mr-32 lg:items-center    -mt-14  flex  flex-col gap-5 pl-20 pr-20 md:mb-40">
      <div className="lg:flex lg:flex-col lg:basis-1/2 lg:items-start ">
        <div className="lg:mb-32 lg:text-3xl   flex gap-3 mb-10 text-teal-50 justify-center md:justify-start mt-40">
          <span>01</span><h1>PICK YOUR DESTINATION</h1>
        </div>

        <AnimatePresence>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show" 
            className="lg:flex lg:mb-32    md:flex md:justify-center md:items-center"
            >
            <motion.img 
              variants={Destination}
              animate={isActive== 0 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 0 ? "md:w-72 md:h-72 w-18 h-18": "hidden"} `} src={`${siteData.destinations[0].images.png}`}
            />
            <motion.img 
              variants={Destination}
              animate={isActive== 0 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 0 ? "md:w-72 md:h-72 w-18 h-18 hidden": "hidden"} `} src={siteData.destinations[0].images.webp}    
            />
            
            
            <motion.img 
              variants={Destination}
              animate={isActive== 1 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 1 ? "md:w-72 md:h-72 w-18 h-18": "hidden"} `} src={siteData.destinations[1].images.png} 
            />
            <motion.img
              variants={Destination}
              animate={isActive== 1 ?  "show" : "hidden"} 
              key={Math.floor(Math.random())} className={`${isActive === 1 ? "md:w-72 md:h-72 w-18 h-18 hidden": "hidden"} `} src={siteData.destinations[1].images.webp}   
            />
            
            
            <motion.img
              variants={Destination}
              animate={isActive== 2 ?  "show" : "hidden"} 
              key={Math.floor(Math.random())} className={`${isActive === 2 ? "md:w-72 md:h-72 w-18 h-18": "hidden"} `} src={siteData.destinations[2].images.png} 
            />
            <motion.img 
              variants={Destination}
              animate={isActive== 2 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 2 ? "md:w-72 md:h-72 w-18 h-18 hidden": "hidden"} `} src={siteData.destinations[2].images.webp}  
            />

            <motion.img 
              variants={Destination}
              animate={isActive== 3 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 3 ? "md:w-72 md:h-72 w-18 h-18": "hidden"} `} src={siteData.destinations[3].images.png}     
            />
            <motion.img 
              variants={Destination}
              animate={isActive== 3 ?  "show" : "hidden"}
              key={Math.floor(Math.random())} className={`${isActive === 3 ? "md:w-72 md:h-72 w-18 h-18 hidden": "hidden"} `} src={siteData.destinations[3].images.webp} 
            />

          </motion.div>
        </AnimatePresence>
      </div>
      <div className="lg:flex lg:basis-2/4">
        <div className="flex flex-col gap-8">
          <div className="">
            <nav className="">
              <ul className="uppercase text-white flex justify-center items-center gap-10 font-barlowcondensed">
                <li onClick={(e)=>handleClick(0)} className=" cursor-pointer text-xl relative"><div className={` ${isActive === 0 ? "" : "hidden"} absolute w-12 h-2 bg-white z-10 -bottom-2`}></div>Moon</li>
                <li onClick={(e)=>handleClick(1)} className="cursor-pointer text-xl relative"><div className={` ${isActive === 1 ? "" : "hidden"} absolute w-12 h-2 bg-white z-10 -bottom-2`}></div>Mars</li>
                <li onClick={(e)=>handleClick(2)} className="cursor-pointer text-xl relative"> <div className={` ${isActive === 2 ? "" : "hidden"} absolute w-12 h-2 bg-white z-10 -bottom-2`}></div>Europa</li>
                <li onClick={(e)=>handleClick(3)} className="cursor-pointer text-xl relative"><div className={` ${isActive === 3 ? "" : "hidden"} absolute w-12 h-2 bg-white z-10 -bottom-2`}></div>Titan</li>
              </ul>
            </nav>
          </div>
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show" 
              >
              <motion.div
                variants={Destination}
                key={Math.floor(Math.random())}
                animate={isActive== 0 ?  "show" : "hidden"} 
                className={` ${isActive === 0 ? "" : "hidden"}`}>
                <div key={siteData.destinations[0].id} className="text-white flex flex-col justify-center">
                  <div className="text-7xl text-center font-bellefair">{siteData.destinations[0].name}</div>
                    <div className="flex flex-col gap-5">
                      <div className="Details lg:text-left flex flex-col justify-center items-center text-center md:leading-8 tracking-widest font-barlow">{siteData.destinations[0].description}</div>
                      <hr className="mt-5 mb-5"></hr>

                      <div className="md:flex md:justify-center md:items-center md:gap-20 ">
                        <div className="md:flex md:flex-col md:gap-5">
                          <div className="text-center uppercase font-barlowcondensed">Avg . distance</div>
                          <div className="distance text-center text-4xl font-bellefair">{siteData.destinations[0].distance}</div>
                        </div>
                        <div className="md:flex md:flex-col md:gap-6 text-center mt-3">
                          <div className="uppercase font-barlowcondensed">est . travel time</div>
                          <div className="text-center text-4xl font-bellefair">{siteData.destinations[0].travel}</div>
                        </div>  
                      </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={Destination}
                key={Math.floor(Math.random())}
                animate={isActive== 1 ?  "show" : "hidden"} 
                className={`${isActive === 1 ? "" : "hidden"}`}>
                <div key={siteData.destinations[1].id} className="text-white flex flex-col justify-center">
                  <div className="text-7xl text-center font-bellefair">{siteData.destinations[1].name}</div>
                    <div className="flex flex-col gap-3">
                      <div className="Details flex flex-col justify-center items-center text-center  font-barlow md:leading-8 tracking-wider">{siteData.destinations[1].description}</div>
                      <hr className="mt-5 mb-5"></hr>
                    <div className="md:flex md:justify-center md:items-center md:gap-20 ">
                    <div className="md:flex md:flex-col md:gap-5">
                        <div className="text-center uppercase font-barlowcondensed">Avg . distance</div>
                        <div className="distance text-center text-4xl font-bellefair">{siteData.destinations[1].distance}</div>
                      </div>
                      <div className= "md:flex md:flex-col md:gap-5 mt-3">
                        <div className="uppercase text-center font-barlowcondensed">est . travel time</div>
                        <div className="text-center text-4xl font-bellefair">{siteData.destinations[1].travel}</div>
                      </div>  
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={Destination}
                key={Math.floor(Math.random())}
                animate={isActive== 2 ?  "show" : "hidden"} 
                className={`${isActive === 2 ? "" : "hidden"}`}>
                <div key={siteData.destinations[2].id} className="text-white flex flex-col justify-center">
                  <div className="text-7xl text-center font-bellefair">{siteData.destinations[2].name}</div>
                    <div className="flex flex-col gap-3">
                      <div className="Details flex flex-col  justify-center items-center text-center font-barlow md:leading-8 md:tracking-wider">{siteData.destinations[2].description}</div>
                      <hr className="mt-5 mb-5"></hr>
                      <div className="md:flex md:justify-center md:items-center md:gap-20 ">
                        <div className="md:flex md:flex-col md:gap-5">
                          <div className="text-center uppercase font-barlowcondensed">Avg.distance</div>
                          <div className="distance text-center text-4xl font-bellefair">{siteData.destinations[2].distance}</div>
                        </div>
                        <div className= "mt-3 md:flex md:flex-col md:gap-5">
                          <div className="uppercase text-center font-barlowcondensed">est . travel time</div>
                          <div className="text-center text-4xl font-bellefair">{siteData.destinations[2].travel}</div>
                        </div> 
                      </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={Destination}
                key={Math.floor(Math.random())}
                animate={isActive === 3 ?  "show" : "hidden"} 
                className={`${isActive === 3 ? "" : "hidden"}`}>
                <div key={siteData.destinations[3].id} className="text-white flex flex-col justify-center">
                  <div className="text-7xl text-center font-bellefair">{siteData.destinations[3].name}</div>
                    <div className="flex flex-col gap-3">
                      <div className="Details lg:text-xl flex flex-col justify-center items-center text-center  font-barlow md:leading-8 md:tracking-wider">{siteData.destinations[3].description}</div>
                      <hr className="mt-5 mb-5"></hr>
                      <div className="md:flex md:justify-center md:items-center md:gap-20 ">
                        <div className="md:flex md:flex-col md:gap-5">
                          <div className="text-center uppercase font-barlowcondensed">Avg . distance</div>
                          <div className="distance text-center text-4xl font-bellefair">{siteData.destinations[3].distance}</div>
                        </div>
                        <div className= "md:flex md:flex-col md:gap-5 mt-3">
                          <div className="uppercase text-center font-barlowcondensed ">est . travel time</div>
                          <div className="text-center text-4xl">{siteData.destinations[3].travel}</div>
                        </div>  
                      </div>
                  </div>
                </div>
              </motion.div>  
            </motion.div>
          </AnimatePresence>

      </div>

      </div>
    </div>

  )
}

export default DestinationHero