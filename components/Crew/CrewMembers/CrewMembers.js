import React, {useState} from 'react'
import { siteData } from '@/public/siteData'
import {animate, motion, AnimatePresence} from "framer-motion"
function CrewMembers() {

    const [isActive, setIsActive] = useState(0);

    const handleClick = (index) =>{
        setIsActive(index)
    }
    
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

  return (
    <div className=" h-full lg:flex-row   text-white pl-4 pr-4 mb-44 md:mb-72">
        <div className="lg:mt-40 md:pl-20 md:mr-20   flex flex-col justify-center items-center gap-20">
            <div className=" lg:flex lg:ml-40 lg:text-2xl lg:justify-start lg:mr-40 lg:w-full    font-barlowcondensed flex gap-3 md:justify-start md:mt-20 md:-m-16"><span>02</span>MEET YOUR CREW</div>
            <div className="lg:flex-row-reverse lg:items-center md:flex-col-reverse md:flex md:gap-5">
                
                <AnimatePresence>

                    <motion.div
                        variants={variants}
                        hidden="hidden"
                        animate="show"
                        className="lg:basis-3/5 flex flex-col items-center opacity-80">
                        
                        <motion.img 
                            variants={Destination}
                            animate={isActive== 0 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 0 ? "lg:h-3/5 lg:w-3/5  md:w-96 md:h-96 md:justify-center  w-52 h-52": "hidden"} `} src={`${siteData.crew[0].images.png}`} 

                        />
                        <motion.img 
                            variants={Destination}
                            animate={isActive== 0 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 0 ? "lg:h-3/5 lg:w-3/5   md:w-96 md:h-96 md:justify-center  w-52 h-52 hidden": "hidden"} `} src={siteData.crew[0].images.webp} 

                        />

                        
                        <motion.img 
                            variants={Destination}
                            animate={isActive== 1 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 1 ? "lg:h-3/5 lg:w-3/5   md:w-80 md:h-80 md:justify-center  w-52 h-52": "hidden"} `} src={siteData.crew[1].images.png} 

                        />
                        <motion.img 
                            variants={Destination}
                            animate={isActive== 1 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 1 ? "lg:h-3/5 lg:w-3/5   md:w-80 md:h-80 md:justify-center  w-52 h-52 hidden": "hidden"} `} src={siteData.crew[1].images.webp}
                        

                        />

                        
                        <motion.img
                            variants={Destination}
                            animate={isActive== 2 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 2 ? "lg:h-3/5 lg:w-3/5   md:w-96 md:h-96 md:justify-center  w-52 h-52": "hidden"} `} src={siteData.crew[2].images.png} 

                        />
                        <motion.img
                            variants={Destination}
                            animate={isActive== 2 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 2 ? "lg:h-3/5 lg:w-3/5   md:w-96 md:h-96 md:justify-center  w-52 h-52 hidden": "hidden"} `} src={siteData.crew[2].images.webp}
                        />

                        
                        <motion.img
                            variants={Destination}
                            animate={isActive== 3 ?  "show" : "hidden"}
                            key={Math.floor(Math.random())} className={`${isActive === 3 ? "lg:h-3/5 lg:w-3/5   md:w-96 md:h-96 md:justify-center  w-52 h-52": "hidden"} `} src={siteData.crew[3].images.png}
                        

                        />
                        <motion.img
                            variants={Destination}
                            animate={isActive== 3 ?  "show" : "hidden"}
                            key={Math.floor(Math.random()*100)} className={`${isActive === 3 ? "lg:h-3/5 lg:w-3/5   md:w-96 md:h-96 md:justify-center  w-52 h-72 hidden": "hidden"} `} src={siteData.crew[3].images.webp}
                        

                        />

                    </motion.div>
                </AnimatePresence>

                <div className="lg:gap-10 lg:mt-20 lg:flex lg:flex-col-reverse lg:basis-2/5">
                    <hr className="lg:hidden lg:items-start lg:flex md:hidden mt-14 bg-slate-600 text-slate-600" />
                    <div className="lg:justify-start  lg:mt-32  flex md:gap-6 gap-10 justify-center md:mt-0 mt-14">
                        <div onClick={()=> handleClick(0)} className={` ${isActive === 0 ? "bg-white" : "bg-gray-600"} md:w-4 md:h-4 w-5 h-5 rounded-full  hover:bg-white`}></div>
                        <div onClick={()=> handleClick(1)} className={` ${isActive === 1 ? "bg-white" : "bg-gray-600"} md:w-4 md:h-4 w-5 h-5 rounded-full  hover:bg-white`}></div>
                        <div onClick={()=> handleClick(2)} className={` ${isActive === 2 ? "bg-white" : "bg-gray-600"} md:w-4 md:h-4 w-5 h-5 rounded-full  hover:bg-white`}></div>
                        <div onClick={()=> handleClick(3)} className={` ${isActive === 3 ? "bg-white" : "bg-gray-600"} md:w-4 md:h-4 w-5 h-5 rounded-full  hover:bg-white`}></div>
                    </div>

                    <AnimatePresence>
                        
                        <motion.div
                            variants={Destination}
                            animate={isActive== 0 ?  "show" : "hidden"} 
                            className={` lg:gap-3 ${isActive === 0 ? "" : "hidden"} text-center flex flex-col gap-3  md:mt-5 mt-20`}>
                            <div className="lg:text-left    font-bellefair opacity-50 text-3xl">{siteData.crew[0].role}</div>
                            <div className="lg:text-left lg:text-6xl font-bellefair text-5xl">{siteData.crew[0].name}</div>
                            <div className="lg:text-left  lg:text-3xl    font-barlow text-lg mb-10">{siteData.crew[0].bio}</div>

                        </motion.div>
                        <motion.div
                            variants={Destination}
                            animate={isActive== 1 ?  "show" : "hidden"} 
                            className={`lg:gap-3 ${isActive === 1 ? "" : "hidden"} text-center flex flex-col gap-3 mt-10`}>
                            <div className="lg:text-left font-bellefair opacity-70 text-3xl">{siteData.crew[1].role}</div>
                            <div className="lg:text-left lg:text-5xl font-bellefair text-5xl">{siteData.crew[1].name}</div>
                            <div className="lg:text-left lg:text-3xl ft font-barlow text-lg mb-10">{siteData.crew[1].bio}</div>
                            
                        </motion.div>
                        <motion.div
                            variants={Destination}
                            animate={isActive== 2 ?  "show" : "hidden"} 
                            className={`lg:gap-3 ${isActive === 2 ? "" : "hidden"} text-center flex flex-col gap-3 mt-10`}>
                            <div className="lg:text-left    font-bellefair opacity-70 text-3xl">{siteData.crew[2].role}</div>
                            <div className="lg:text-left lg:text-7xl font-bellefair text-5xl">{siteData.crew[2].name}</div>
                            <div className="lg:text-left lg:text-3xl  font-barlow text-lg mb-10">{siteData.crew[2].bio}</div>
                            
                        </motion.div>
                        <motion.div 
                            variants={Destination}
                            animate={isActive== 3 ?  "show" : "hidden"}
                            className={`lg:gap-3 ${isActive === 3 ? "" : "hidden"} text-center flex flex-col gap-3 mt-10`}>
                            <div className="lg:text-left font-bellefair opacity-70 text-3xl">{siteData.crew[3].role}</div>
                            <div className="lg:text-left lg:text-7xl font-bellefair text-5xl">{siteData.crew[3].name}</div>
                            <div className="lg:text-left lg:text-3xl     font-barlow text-lg mb-10">{siteData.crew[3].bio}</div>
                            
                        </motion.div>
                    </AnimatePresence>

                </div>
                
            </div>
        </div>

    </div>
  )
}

export default CrewMembers