import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FilterContext } from '../pages/Filter/FilterContext';
function HeaderSearch() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearchClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [searchInput, setSearchInput] = useState('');
    const { filterValues, setFilterValues } = useContext(FilterContext);
    const handleSearch = () => {
        const value = document.getElementById('SearchID').value
        setFilterValues((prevValues) => ({
            ...prevValues,
            name: value
        }));
    };
    return (
        <div>
            <Link>
                <FaSearch className="cursor-pointer" onClick={handleSearchClick} />
                {isModalOpen && (
                    //modal start
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 animate__animated animate__fadeIn">
                        <div className=" p-8 rounded-md shadow-lg max-w-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <div className="text-center mb-6">
                                <h2 className="text-[15px] font-extrabold mb-2 text-white uppercase">
                                    what outfit are you looking for..?
                                </h2>
                                <p className="text-gray-300">Explore more features and enjoy your experience!</p>
                            </div>
                            <input
                                onChange={(e) => setSearchInput(e.target.value)}
                                value={searchInput}
                                type="text"
                                id="SearchID"
                                placeholder="Search"
                                className='w-full'
                            />
                            <div className="text-center mt-10">
                                <button
                                    onClick={closeModal}
                                    className="w-full bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-white transition-all duration-300"
                                >
                                    Bagla
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Link>
        </div>
    )
}

export default HeaderSearch
