import { Routes, Route, HashRouter } from 'react-router-dom'
import React, { useState } from 'react'

import Home from '../pages/Home'
import Console from '../pages/Console'
import Explore from '../pages/Explore'
import Partitions from '../pages/Partitions'
import InitUser from '../pages/InitUser'
import Content from '../pages/Content'


export default function AppNavigator() {
  const [ip, setIP] = useState("localhost") 
  const handleChage = (e) => {
    console.log(e.target.value)
    setIP(e.target.value)
  }

  return (
    <HashRouter>
      <input type="text" onChange={handleChage}/>{ip}
      <Routes>
 
          <Route path="/" element={<Home/>} />
          <Route path="/console" element={<Console ip={ip}/>} />
          <Route path="/explore" element={<Explore ip={ip}/>} />
          <Route path="/disk/:id/" element={<Partitions ip={ip}/>} />
          <Route path="/login/:disk/:part" element={<InitUser ip={ip}/>} />
          <Route path="/show/:disk/:part" element={<Content ip={ip}/>} />
      </Routes>
    </HashRouter>
  )
}