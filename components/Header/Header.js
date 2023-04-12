import React, {useState, useEffect} from 'react'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

function Header() {
  const [mdActive, setMdActive] = useState(0)

  const handleClick = (index) =>{
    setMdActive(index)
  }

  return (
    <div className="md:statics  lg:relative   h-14 ml-3 flex justify-between items-center">
      <div className='md:static fixed'>
        <Logo/>
      </div>
      
      <div className="">
        <Navbar
          mdActive={mdActive}
          setMdActive={setMdActive}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default Header