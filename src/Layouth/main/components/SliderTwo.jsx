import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const SliderTwo = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://38.242.233.112:499/api/test");
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
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 h-[500px] mt-20 flex items-center justify-center">
              <div className="mx-4 md:mx-8 lg:mx-20 p-8 md:p-16 lg:p-12 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                <img
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover  border-4 "
                  src={quote.image}
                  alt="User"
                />
                <div className="quote-container text-gray-900 text-center md:text-left">
                  <FaQuoteRight className="text-4xl text-black" />
                  <p className="text-xl max-w-screen-md lg:max-w-screen-2xl text-gray-700 font-bold">
                    {quote.full_name}
                  </p>
                  <div className="user-info">
                    <p className="font-bold text-gray-700 text-sm md:text-base lg:text-lg">{quote.description}</p>
                    <span className="text-gray-600 text-xs md:text-sm lg:text-base">{quote.field}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next text-black  p-7 "></div>
        <div className="swiper-button-prev text-black p-7  "></div>
      </Swiper>

    </>
  );
};

export default SliderTwo;
