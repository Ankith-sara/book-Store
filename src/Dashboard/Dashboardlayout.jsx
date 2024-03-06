import React from 'react'
import { Outlet } from 'react-router-dom'
import SideTab from './SideTab'

const Dashboardlayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <SideTab/>
        <Outlet/>
    </div>
  )
}

export default Dashboardlayout