import React from 'react'
import Navbar from '../../components/Navbar'
import MainApp from '../../components/MainApp'
import TestiqlemeVeSelahiyyet from '../../components/testikleme/TestiqlemeVeSelahiyyet'
import SonEmeliyyatlar from '../../components/Sonemeliiyatlar/SonEmeliyyatlar'

function AdminHome() {
  return (
    <div>
      <Navbar />
      <div className='flex '>
        <MainApp />
        <SonEmeliyyatlar />
      </div>
      <TestiqlemeVeSelahiyyet />

    </div>
  )
}

export default AdminHome
