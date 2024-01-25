import React from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function MainApp() {
  return (
    <div className='mx-10'>
      <div className='  text-black w-[500px] h-[400px] mt-10'>
        <div className='bg-gray-600 p-3 text-white px-5'>Evim</div>
        <div className='flex-col flex justify-between'>
          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/BasketItem"} className='uppercase text-xs font-bold'>Basket Items</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/BasketItem"} className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/Blog"} className='uppercase text-xs font-bold'>Blogs</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/Blog"} className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                  <Link to={"/mainapp/Brand"} className='uppercase text-xs font-bold'>Brands</Link>
                  <div className='flex space-x-4 text-sm'>
                    <div className="flex items-center">
                      <FaPlus className='text-yellow-300' />
                      <Link  to={"/mainapp/CreateItem/Brand"}  className="ml-1">Elave et</Link>
                    </div>
                    <div className="flex items-center">
                      <FaEdit className='text-yellow-300' />
                      <Link className="ml-1">Deyis</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/Color"} className='uppercase text-xs font-bold'>Color</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/Color"}  className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/HomeSlider"} className='uppercase text-xs font-bold'>Home Slider</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/HomeSlider"} className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/Product"} className='uppercase text-xs font-bold'>Product</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/Product"} className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                <Link to={"/mainapp/Testimonials"} className='uppercase text-xs font-bold'> Testimonials</Link>
                <div className='flex space-x-4 text-sm'>
                  <div className="flex items-center">
                    <FaPlus className='text-yellow-300' />
                    <Link to={"/mainapp/CreateItem/Testimonials"} className="ml-1">Elave et</Link>
                  </div>
                  <div className="flex items-center">
                    <FaEdit className='text-yellow-300' />
                    <Link className="ml-1">Deyis</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                  <Link to={"/mainapp/Size"} className='uppercase text-xs font-bold'>Sizes</Link>
                  <div className='flex space-x-4 text-sm'>
                    <div className="flex items-center">
                      <FaPlus className='text-yellow-300' />

                      <Link to={"/mainapp/CreateItem/Size"} className="ml-1">Elave et</Link>
                    </div>
                    <div className="flex items-center">
                      <FaEdit className='text-yellow-300' />
                      <Link className="ml-1">Deyis</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div>
              <div>
                <div className='mx-4 mt-5 border-b-2 flex justify-between'>
                  <Link to={"/mainapp/Teams"} className='uppercase text-xs font-bold'>Teams</Link>
                  <div className='flex space-x-4 text-sm'>
                    <div className="flex items-center">
                      <FaPlus className='text-yellow-300' />

                      <Link to={"/mainapp/CreateItem/Size"} className="ml-1">Elave et</Link>
                    </div>
                    <div className="flex items-center">
                      <FaEdit className='text-yellow-300' />
                      <Link className="ml-1">Deyis</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default MainApp
