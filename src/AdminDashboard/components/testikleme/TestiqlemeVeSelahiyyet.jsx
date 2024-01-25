import React from 'react'
import Istifadeciler from './Istifadeciler'
import Qruplar from './Qruplar'

function TestiqlemeVeSelahiyyet() {
  return (
    <div className='mx-10'>
      <div className='  text-black w-[500px] h-[400px] mt-10'>
        <div className='bg-gray-600 p-3 text-white px-5'>TƏSDİQLƏMƏ VƏ SƏLAHİYYƏT</div>
      <Istifadeciler/>
      <Qruplar/>

      </div>
    </div>
  )
}

export default TestiqlemeVeSelahiyyet
