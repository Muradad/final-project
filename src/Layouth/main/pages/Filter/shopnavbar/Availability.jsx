import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useContext } from 'react';
import { FilterContext } from '../FilterContext';


function Availability() {
    const { filterValues, setFilterValues } = useContext(FilterContext);
    const [stock, setStock] = useState(false);

    const toggleColors = () => {
        setStock(!stock);
    };
    const handleStockClick = () => {
        if (filterValues.stock__gte === '1') {
            setFilterValues((prevValues) => ({
                ...prevValues,

                stock__gte: '',

            }));
        } else {
            setFilterValues((prevValues) => ({
                ...prevValues,

                stock__gte: '1',

            }));
        }

    };
    return (
        <div>
            <div className="max-w-sm mt-4 mx-10">
                <div className={`overflow-hidden transition-all duration-300 ${stock ? 'h-auto' : 'h-16'}`}>
                    <div
                        className="flex justify-between items-center p-4 cursor-pointer"
                        onClick={toggleColors}
                    >
                        <div className="text-2xl font-semibold">Availability</div>
                        <div className={`transform ${stock ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                            <IoIosArrowDown size={24} />
                        </div>
                    </div>
                    <div className={`p-4 transition-opacity ${stock ? 'opacity-100' : 'opacity-0'} overflow-hidden duration-300`}>
                        <div className='flex flex-col leading-10'>

                            <li className='flex items-center transition-transform duration-300 delay-100 transform translate-y-0 opacity-100'>
                                <input onChange={handleStockClick} type="checkbox" id="checkboxA2" className="form-checkbox h-5 w-5 text-blue-500" />
                                <label htmlFor="checkbox1" className="ml-2 text-gray-700"><span>In stock <strong></strong></span> </label>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Availability
