import React, { useState, useCallback, useEffect } from 'react';
import { IoFilter } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Brand from './Brand';
import Size from './Size';
import Price from './Price';
import Colors from './Colors';
import Availability from './Availability';
import ShopSearch from '../ShopSearch';
import { FilterResDataContext } from './Context/FilterDataResContext';
import { useContext } from 'react';
const FilterResponsive = () => {
  const {filterData} = useContext(FilterResDataContext)

  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleOutsideClick = useCallback((event) => {
    const clickedElement = event.target;
    const isInsideFilter = clickedElement.classList.contains('filterasiya') || clickedElement.closest('.filterasiya');

    if (isInsideFilter) {
      console.log('Clicked inside the filter');
    } else {
      const isNotFilterButton = clickedElement.classList.contains('notfilter') || clickedElement.closest('.notfilter');

      if (isNotFilterButton) {
        setFilterVisible((prev) => !prev);
        console.log('--');
      } else {
        setFilterVisible(false);
        console.log('++');
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div>
      <div className='flex justify-center items-center space-x-2 cursor-pointer notfilter'>
        <IoFilter size={20} className='mx-2' />
        Filter
      </div>
      <AnimatePresence>
        {isFilterVisible && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
            className='sidebarFilter fixed left-0 top-[8%] bg-white shadow-2xl text-black w-[17%] h-screen z-50'
          >
            <div id='filterdiv' className='flex flex-col filterasiya pt-20  '>
              <div></div>
              <Brand value={filterData.brands} />
              <Size value={filterData.size} />
              <Price />
              <Colors value={filterData.colors} />
              <Availability />
              <div className='mt-10'>
                <ShopSearch />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterResponsive;
