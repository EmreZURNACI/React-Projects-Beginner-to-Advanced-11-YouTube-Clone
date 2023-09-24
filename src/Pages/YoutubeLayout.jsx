import React from 'react'
import Navbar from "../Templates/Navbar";
import { Outlet } from 'react-router-dom';
function YoutubeLayout() {
  return (
    <div className="font-['Roboto']">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default YoutubeLayout