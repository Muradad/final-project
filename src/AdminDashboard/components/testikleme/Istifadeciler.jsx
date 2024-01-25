import React from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Istifadeciler() {
  return (
    <div>
            <div>
                <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                    <Link className='uppercase text-xs font-bold'>Istifadəçilər</Link>
                    <div className='flex space-x-4 text-sm'>
                        <div className="flex items-center">
                            <FaPlus className='text-yellow-300' />
                            <Link className="ml-1">Elave et</Link>
                        </div>
                        <div className="flex items-center">
                            <FaEdit className='text-yellow-300' />
                            <Link    className="ml-1">Deyis</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Istifadeciler
