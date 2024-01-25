import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const FilterResDataContext = createContext();

export const FilterDataResProvider = ({ children }) => {
    const [filterData, setFilterData] = useState([]);
    const fetchFilterData = async () => {
      try {
        const response = await fetch('http://38.242.233.112:499/api/filter');
        const data = await response.json();
        setFilterData(data);
        console.log(data,'---------------')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
    fetchFilterData();}
    ,[])

  return (
      <FilterResDataContext.Provider value={{ filterData,setFilterData }}>
        {children}
      </FilterResDataContext.Provider>
  );
};


