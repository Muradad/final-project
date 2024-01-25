import React from 'react'
import {  FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Lazziya() {
  return (
    <div>
    <div>
        <div className="mx-4 mt-5 border-b-2 flex flex-col">
            <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                    <FaPlus className="text-yellow-300" />
                    <Link className="ml-1">Laz Ziya</Link>
                </div>
                <div className="flex items-center">
                    <span className="ml-1 text-[10px]">Testimonials</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Lazziya
