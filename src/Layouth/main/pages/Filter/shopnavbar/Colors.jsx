import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FilterContext } from '../FilterContext';

function Colors({ value }) {
  const [colorsOpen, setColorOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const { setFilterValues } = useContext(FilterContext);

  const toggleColors = () => {
    setColorOpen(!colorsOpen);
  };

  const handleColorChange = (colorId) => {
    setSelectedColor(colorId);
    setFilterValues((prevValues) => ({
      ...prevValues,
      color: colorId.slice(1)
    }));
  };

  return (
    <div className="max-w-sm mt-4 mx-10">
      <div className={`overflow-hidden transition-all duration-300 ${colorsOpen ? 'h-auto' : 'h-16'}`}>
        <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleColors}>
          <div className="text-2xl font-semibold">Colors</div>
          <div className={`transform ${colorsOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
            <IoIosArrowDown size={24} />
          </div>
        </div>
        <div className={`p-4 transition-opacity ${colorsOpen ? 'opacity-100' : 'opacity-0'} overflow-hidden duration-300`}>
          <div className='flex flex-col leading-10'>
            <label onClick={() => handleColorChange('C')} htmlFor={`checkboxS$s`} className={`ml-2 text-gray-700 filtersize uppercase cursor-pointer ${selectedColor === 'C' ? 'text-red-700 font-bold' : ''}`}>
              Hamisi
            </label>

            {value && value.map((color, index) => (
              <li key={index} className='flex items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100'>
                <label
                  onClick={() => handleColorChange(`S${color.id}`)}
                  htmlFor={`checkboxS${index}`}
                  className={`ml-2 text-gray-700 filtersize uppercase cursor-pointer ${selectedColor === `S${color.id}` ? 'text-red-700 font-bold' : ''}`}
                >
                  {color.name} ({color.products})
                </label>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
