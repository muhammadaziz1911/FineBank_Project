import React from 'react'
import Home from "./../home/Homepage"
import { Routes , Route } from 'react-router-dom'
import Signin from '../main/signin/Signin'



const MainPage = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>
  )
}

export default MainPage
