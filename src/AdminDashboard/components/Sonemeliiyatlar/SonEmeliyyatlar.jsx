import React from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Lazziya from './Lazziya'

function SonEmeliyyatlar() {
    return (
        <div className="mt-10   w-full mx-10">
          <div className=''>  <h1 className="text-2xl font-semibold mb-4 bg-gray-500 text-white p-2">Son əməliyyatlar</h1></div>

            <div className="mb-6 text-center">
                <p className="text-lg font-medium ">Mənim əməliyyatlarım</p>
            </div>
          <Lazziya/>
        </div>
    )
}

export default SonEmeliyyatlar
