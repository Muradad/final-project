// ShopSearch.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "../Filter/Filter.scss"
import { useContext } from 'react';
import { FilterContext } from './FilterContext';

function ShopSearch() {
  
  const { filterValues, setFilterValues } = useContext(FilterContext);
  const handleSearch = () => {
    const value = document.getElementById('SearchID').value
    setFilterValues((prevValues) => ({
      ...prevValues,
      name: value
    }));
  };
  return (
    <div className="relative w-64 mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
      <input
      onChange={handleSearch}
        type="text"
        id='SearchID'
        placeholder="Search"
 
        className="w-full pl-10 pr-4 py- focus:outline-none  transition duration-300"
      />
    </div>
  );
}

export default ShopSearch;
