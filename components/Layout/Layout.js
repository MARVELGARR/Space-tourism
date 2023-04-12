import React from 'react'
import Header from '../Header/Header'

function Layout({ backgroundImage, children }) {
  return (
    <div>
      <div className="flex justify-center items-center bg-zinc-900">

        <div className="h-full lg:flex hidden bg-cover bg-no-repeat" style={{backgroundImage:`url(${backgroundImage.desktop})`}}>
          <Header/>
          {children}
        </div>
        <div className="lg:hidden h-full bg-cover bg-no-repeat " style={{backgroundImage:`url(${backgroundImage.tablet})`}}>
          <Header/>
          {children}
        </div>

      </div> 
    </div>
      
  )
}

export default Layout