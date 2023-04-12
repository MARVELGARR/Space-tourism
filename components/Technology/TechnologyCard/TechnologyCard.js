import React, {useState} from 'react'
import { siteData } from '@/public/siteData'
import {motion, AnimatePresence} from "framer-motion"

function TechnologyCard() {

  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) => {
    setIsActive(index);
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

  return (
    <div className=" lg:flex-row-reverse lg:relative h-screen lg:justify-center lg:items-center lg:mt-50 lg:mt-40    text-white flex flex-col  gap-7 mt-10">
      
      <div className='    lg:flex lg:basis-3/5    lg:flex-col flex'>
        

        <div className="hidden lg:top-40 lg:left-0 lg:text-4xl lg:absolute lg:block lg:-mt-40   md:mt-20 md:ml-10 md:text-left font-barlowcondensed text-2xl text-center"><span>03</span>space launch 101</div>
        <div className="images lg:mr-20 ">

          <AnimatePresence>

          </AnimatePresence>
          <div>
        
            <div className="lg:hidden    md:mt-20 md:ml-10 md:text-left font-barlowcondensed text-2xl text-center"><span>03</span>space launch 101</div></div>
              
              <AnimatePresence>

                <motion.img
                  variants={Destination}
                  animate={isActive== 0 ?  "show" : "hidden"} 

                  className={`${isActive === 0 ? " lg:hidden  lg:w-96 lg:h-96     w-full h-62": "hidden"} `} src={siteData.technology[0].images.landscape} 
                />
                <motion.img
                  variants={Destination}
                  animate={isActive== 0 ?  "show" : "hidden"} 

                  className={`${isActive === 0 ? " lg:block   lg:w-96 lg:h-96   w-full h-62 hidden": "hidden"} `} src={siteData.technology[0].images.portrait} 
                />

                <motion.img
                  variants={Destination}
                  animate={isActive== 1 ?  "show" : "hidden"} 

                  className={`${isActive === 1 ? " lg:hidden  lg:w-96 lg:h-96    w-full h-62": "hidden"} `} src={siteData.technology[1].images.landscape} 
                />
                <motion.img
                  variants={Destination}
                  animate={isActive== 1 ?  "show" : "hidden"} 

                  className={`${isActive === 1 ? " lg:block   lg:w-96 lg:h-96    w-full h-62 hidden": "hidden"} `} src={siteData.technology[1].images.portrait} 
                />

                <motion.img
                  variants={Destination}
                  animate={isActive== 2 ?  "show" : "hidden"} 

                  className={`${isActive === 2 ? " lg:hidden  lg:w-96 lg:h-96    w-full h-62": "hidden"} `} src={siteData.technology[2].images.landscape} 
                />

                <motion.img
                  variants={Destination}
                  animate={isActive== 2 ?  "show" : "hidden"} 
                  className={`${isActive === 2 ? " lg:block   lg:w-96 lg:h-96    w-full h-62 hidden": "hidden"} `} src={siteData.technology[2].images.portrait} 

                />
                  
              </AnimatePresence>
              

            </div>

          
      </div>

      <div className="lg:flex  lg:justify-center lg:items-center lg:basis-2/3">
        <div className=" lg:-mt-2 lg:gap-16   flex lg:flex-col justify-center items-center gap-10 mt-10">
          <div onClick={()=>handleClick(0)} className={` ${isActive === 0 ? "bg-white text-slate-900" : "md:bg-transparent md:border-2 bg-slate-800 text-white"}    flex items-center justify-center rounded-full  text-white md:w-16 md:h-16 w-12 h-12 md`}>1</div>
          <div onClick={()=>handleClick(1)} className={` ${isActive === 1 ? "bg-white text-slate-900" : "md:bg-transparent md:border-2 bg-slate-800 text-white"}    flex items-center justify-center rounded-full  text-white md:w-16 md:h-16 w-12 h-12 md`}>2</div>
          <div onClick={()=>handleClick(2)} className={` ${isActive === 2 ? "bg-white text-slate-900" : "md:bg-transparent md:border-2 bg-slate-800 text-white"}    flex items-center justify-center rounded-full  text-white md:w-16 md:h-16 w-12 h-12 md`}>3</div>
          
        </div>

        <AnimatePresence>

          <div className=" lg:-ml-5 mb-48 mt-15 flex flex-col gap-5 text-center">
            
            <motion.div 
              variants={Destination}
              animate={isActive== 0 ?  "show" : "hidden"}
              className={`lg:text-left ${isActive ===0 ? "" : "hidden"} flex flex-col gap-5 md:pl-32 md:pr-32`}>
              <div className="flex flex-col text-center">
                <div className="lg:text-2xl text-xl mt-10">The terminology</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="lg:text-7xl text-5xl lg:text-left font-bellefair">{siteData.technology[0].name}</div>
                <div className="lg:text-2xl lg:text-left lg:leading-10 lg:tracking-wider text-md font-barlow">{siteData.technology[0].description}</div>
              </div>
            </motion.div>


            <motion.div
              variants={Destination}
              animate={isActive== 1 ?  "show" : "hidden"} 
              className={`${isActive ===1 ? "" : "hidden"} flex flex-col gap-5 md:pl-32 md:pr-32`}>
              <div className="flex flex-col text-center">
                <div className="lg:text-2xl text-xl mt-10">The terminology</div>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="lg:text-7xl text-5xl lg:text-left font-bellefair">{siteData.technology[1].name}</div>
                <div className="lg:text-2xl lg:text-left lg:leading-10 lg:tracking-wider text-md font-barlow">{siteData.technology[1].description}</div>
              </div>
            </motion.div>


            <motion.div 
              variants={Destination}
              animate={isActive== 2 ?  "show" : "hidden"}
              className={`${isActive ===2 ? "" : "hidden"} flex flex-col gap-5 md:pl-32 md:pr-32`}>
              <div className="flex flex-col text-center">
                <div className="lg:text-2xl text-xl mt-10">The terminology</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="lg:text-7xl text-5xl lg:text-left font-bellefair">{siteData.technology[2].name}</div>
                <div className="lg:text-2xl lg:text-left lg:leading-10 lg:tracking-wider text-md font-barlow">{siteData.technology[2].description}</div>
              </div>
            </motion.div>


          </div>
        </AnimatePresence>

      </div>
      
    </div>
  )
}

export default TechnologyCard