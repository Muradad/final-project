import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FilterContext } from '../FilterContext';

function Brand(brands) {
  const { setFilterValues } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  const handleBrandChange = (event) => {
    let brandId = event.target.id;
    const filterElements = document.querySelectorAll('.filterbrands');
    filterElements.forEach(element => {
      element.style.color = 'black';
      element.style.fontWeight = '400'
    });
    document.getElementById(brandId).style.color = 'red'
    document.getElementById(brandId).style.fontWeight = '700'
    if (brandId==='a'){
      brandId = ''
    }
    setFilterValues(prevValues => ({
      ...prevValues,
      brand: brandId
    }));
  }
  console.log(brands)
  return (
    <div className="max-w-sm mt-4 mx-10">
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-16'}`}>
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <div className="text-2xl font-semibold">Brands</div>
          <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
            <IoIosArrowDown size={24} />
          </div>
        </div>
        <div className={`p-4 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} overflow-hidden duration-300`}>
          <div className='flex flex-col leading-10'>
          <label onClick={handleBrandChange} id='a' htmlFor={`checkboxB${0}`} className="ml-2 text-gray-700 filterbrands cursor-pointer">Hamisi <strong></strong></label>
          {brands.value && brands.value.map((brand, index) => (
        <li key={index} className='flex items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100'>
        
        <label onClick={handleBrandChange} id={brand.id} htmlFor={`checkboxB${index}`} className="ml-2 text-gray-700 filterbrands uppercase cursor-pointer">{brand.name} <span>({brand.products})</span></label>
    </li>
        ))}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
