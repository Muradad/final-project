import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


function AboutCreativeTeam() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://38.242.233.112:499/api/TeamView");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className='text-center mt-20'><h1 className='text-4xl font-semibold underline'>Creative Team</h1></div>

      <div className="flex flex-wrap justify-center gap-10 p-8 mt-10 bg-slate-50">
        {quotes.map((quote, index) => (
          <div key={index} className="bg-white p-20 shadow-2xl relative ">

            <div className="relative group">
              <img
                src={quote.image}
                className="rounded-full w-40 h-40 object-cover mx-auto group-hover:opacity-80 transition-opacity"
              />
              <div className="icon-container cursor-pointer flex absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-center bg-blue-500 rounded-full w-7 h-7 transition-transform transform hover:scale-110">
                  <FaFacebookF size={20} className="text-white" />
                </div>
                <div className="flex items-center justify-center bg-pink-500 rounded-full w-7 h-7 transition-transform transform hover:scale-17">
                  <FaInstagram size={20} className="text-white" />
                </div>
                <div className="flex items-center justify-center bg-blue-300 rounded-full w-7 h-7 transition-transform transform hover:scale-110">
                  <FaTwitter size={20} className="text-white" />
                </div>
              </div>

            </div>

            <div className='text-center mt-10'>
              <h1 className='text-xl font-bold '>{quote.full_name}</h1>
              <p className='text-sm text-gray-500 '>{quote.field}</p>
            </div>
          </div>
        ))}
      </div>
    </>


  );
}

export default AboutCreativeTeam;
