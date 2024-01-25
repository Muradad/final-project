import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { TfiLayoutGrid4Alt, TfiLayoutGrid3 } from "react-icons/tfi";
import ShopSearch from './ShopSearch';
import Brand from './shopnavbar/Brand';
import Size from './shopnavbar/Size';
import Price from './shopnavbar/Price';
import Colors from './shopnavbar/Colors';
import Availability from './shopnavbar/Availability';
import FilterCart from './FilterCart/FilterCart';
import FilterResponsive from './shopnavbar/FilterResponsive';

import { useContext } from 'react';
import { FilterResDataContext } from './shopnavbar/Context/FilterDataResContext';



function Shop() {
  const {filterData} = useContext(FilterResDataContext)
console.log(filterData,'-=-=-=-=')
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mt-20 p-2 bg-gray-100 w-full ">
        <div className="text-3xl mx-8 pb-4 font-bold">Products</div>
        <div className="flex items-center space-x-3 mx-8 mb-4">
          <Link to="/">Home</Link>
          <span><FaArrowRight /></span>
          <span className="text-gray-500">Products</span>
        </div>
      </div>
      <div className="border-b-2">
        <div className='flex justify-center space-x-10 mx-10 pt-10 pb-10 '>
          <div className='flex justify-start w-full space-x-10'>
            <TfiLayoutGrid4Alt className='cursor-pointer' />
            <TfiLayoutGrid3 className='cursor-pointer' />
            <LuLayoutGrid className='cursor-pointer' />
            <LuLayoutList className='cursor-pointer' />
          </div>
        <div className='DesktopSearch' id='ressearch'>
        <ShopSearch />
        </div>
         <FilterResponsive/>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>

{/* Sol taraftaki filtreleme bölümü */}
<div className='flex flex-col DESKTOPfILTER desktopf'>

  <Brand value={filterData.brands} />
  <Size value={filterData.size} />
  <Price />
  <Colors value={filterData.colors} />
  <Availability />

</div>

{/* Sağ taraftaki filtre kartları */}
<div className='flex flex-wrap h-full  '>

  <FilterCart />
</div>

</div>




    </motion.div>
  );
}

export default Shop;
