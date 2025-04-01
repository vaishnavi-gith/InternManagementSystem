import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header/Head'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header manager='Bala'/>
        <div className="p-6 pt-20 flex-1 overflow-auto">
          <Outlet /> 
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}
