import { createContext, useState, useContext } from "react";
export const FilterContext = createContext();
import { useEffect } from "react";
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const [productwf, setProductWF] = useState([])
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const [filterValues, setFilterValues] = useState(
    {
        size:'',
        color:'',
        brand:'',
        price__lte:'',
        price__gte:'',
        name:'',
        stock__gte:''
    }
  )
  console.log(filterValues.price__gte,'ddddddddddddddd-----')
  console.log(filterValues)
  const fetchWithFilter = async () => {
    try {
        const token = window.localStorage.getItem('access')
      const response = await fetch(`http://38.242.233.112:499/api/products?size=${filterValues.size}&color=${filterValues.color}&brand=${filterValues.brand}&price__gte=${filterValues.price__lte}&price__lte=${filterValues.price__gte}&name=${filterValues.name}&stock__gte=${filterValues.stock__gte}`,
      {
        method: 'GET',
       
      });
      const data = await response.json();
      console.log(`http://38.242.233.112:499/api/products?size=${filterValues.size}&color=${filterValues.color}&brand=${filterValues.brand}&price__gte=${filterValues.price__lte}&price__lte=${filterValues.price__gte}&name=${filterValues.name}&stock__gte=${filterValues.stock__gte}`,'llasldalsldasd')
      setProductWF(data.results)
  } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchWithFilter()
  }, [filterValues])
console.log(productwf,'_+++')

  return (
    <FilterContext.Provider value={{setFilterValues,filterValues, productwf }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook for using FilterContext
export const useFilter = () => {
  return useContext(FilterContext);
};
