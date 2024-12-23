import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'

import Feed from './Pages/Feed'
import Account from './Pages/Account'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <SideBar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/account" element={<Account />} />
        </Routes>

      </BrowserRouter>

    
    </div>
  )
}
