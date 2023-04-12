import React from 'react'
import Header from '../Header/Header'

function CrewLayout({ backgroundImage, children }) {
  return (
    <div>
        <div className="flex justify-center items-center bg-black">

          <div className="w-full lg:flex hidden bg-cover bg-no-repeat" style={{backgroundImage:`url(${backgroundImage.desktop})`}}>
            <Header/>
            {children}
          </div>
          <div className="lg:hidden w-full bg-cover bg-no-repeat " style={{backgroundImage:`url(${backgroundImage.tablet})`}}>
            <Header/>
            {children}
          </div>

        </div> 
    </div>
  )
}

export default CrewLayout