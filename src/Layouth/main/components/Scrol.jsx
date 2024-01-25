import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


function Scrol() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
  return (
    <div>
          <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" z-50 fixed bottom-10 right-10 p-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black duration-1000"
        >
         <FaArrowUp />

        </button>
      )}
    </div>
    </div>
  )
}

export default Scrol
