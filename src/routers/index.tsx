import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/pages/Home'
import AddPerson from '../home/pages/AddPerson'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPerson />} />
    </Routes>
  )
}

export default Routers
