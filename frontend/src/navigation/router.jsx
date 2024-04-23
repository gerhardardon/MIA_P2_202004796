import { Routes, Route, HashRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Console from '../pages/Console'
import Explore from '../pages/Explore'

export default function AppNavigator() {
  return (
    <HashRouter>
      <Routes>
 
          <Route path="/" element={<Home/>} />
          <Route path="/console" element={<Console/>} />
          <Route path="/explore" element={<Explore/>} />
      </Routes>
    </HashRouter>
  )
}