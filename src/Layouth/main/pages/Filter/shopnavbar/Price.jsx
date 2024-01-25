import React, { useState, useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FilterContext } from '../FilterContext';

function Price() {
  const [priceOpen, setPriceOpen] = useState(false);
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();
  const { setFilterValues } = useContext(FilterContext);

  const togglePrice = () => {
    setPriceOpen(!priceOpen);
  };

  const handleFilterClick = (event) => {
    const value1 = document.getElementById('checkboxP1').value
    const value2 = document.getElementById('checkboxP2').value

    setFilterValues((prevValues) => ({
      ...prevValues,
  
        price__lte: value1,
        price__gte: value2,
      
    }));
  };
  return (
    <div>
      <div className="max-w-sm mt-4 mx-10">
        <div className={`overflow-hidden transition-all duration-300 ${priceOpen ? 'h-auto' : 'h-16'}`}>
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={togglePrice}
          >
            <div className="text-2xl font-semibold">Price</div>
            <div className={`transform ${priceOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
              <IoIosArrowDown size={24} />
            </div>
          </div>
          <div className={`p-4 transition-opacity ${priceOpen ? 'opacity-100' : 'opacity-0'} overflow-hidden duration-300`}>
            <div className='flex flex-col leading-10'>
              <label>From : </label>
              <li className='flex relative items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100'>
                <input
                  type="number"
                  min={0}
                  max={toPrice}
                  value={fromPrice}
                  onChange={handleFilterClick}
                  id="checkboxP1"
                  placeholder='0'
                  className="w-full border border-black flex justify-center outline-none px-14 text-black"
                />
                <span className='absolute left-5'>Azn:</span>
              </li>
              <label>To : </label>
              <li className='flex relative items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100'>
                <input
                  type="number"
                  min={fromPrice}
                  value={toPrice}
                  onChange={() => handleFilterClick()}
                  id="checkboxP2"
                  placeholder='100'
                  className="w-full border border-black flex justify-center outline-none px-14 text-black"
                />
                <span className='absolute left-5'>Azn:</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
