import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useContext } from 'react';
import { FilterContext } from '../FilterContext';

function Size({ value }) {
  const [sizeOpen, setSizeOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { setFilterValues } = useContext(FilterContext);

  const toggleSize = () => {
    setSizeOpen(!sizeOpen);
  };

  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
    setFilterValues((prevValues) => ({
      ...prevValues,
      size: sizeId.slice(1),
    }));
  };

  return (
    <div className="max-w-sm mt-4 mx-10">
      <div className={`overflow-hidden transition-all duration-300 ${sizeOpen ? 'h-auto' : 'h-16'}`}>
        <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleSize}>
          <div className="text-2xl font-semibold">Size</div>
          <div className={`transform ${sizeOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
            <IoIosArrowDown size={24} />
          </div>
        </div>
        <div className={`p-4 transition-opacity ${sizeOpen ? 'opacity-100' : 'opacity-0'} overflow-hidden duration-300`}>
          <div className="flex flex-col leading-10">
            <label
              onClick={() => handleSizeChange('s')}
              id="s"
              htmlFor="checkboxS$s"
              className={`ml-2 text-gray-700 filtersize uppercase cursor-pointer ${selectedSize === 's' ? 'text-red-700 font-bold' : ''}`}
            >
              Hamisi
            </label>

            {value &&
              value.map((size, index) => (
                <li key={index} className="flex items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100">
                  <label
                    onClick={() => handleSizeChange(`S${size.id}`)}
                    id={`S${size.id}`}
                    htmlFor={`checkboxS${index}`}
                    className={`ml-2 text-gray-700 filtersize uppercase cursor-pointer ${selectedSize === `S${size.id}` ? 'text-red-700 font-bold' : ''}`}
                  >
                    {size.name} ({size.products})
                  </label>
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Size;
