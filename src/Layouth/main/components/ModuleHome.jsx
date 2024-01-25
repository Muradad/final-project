import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function ModuleHome() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="welcome-modal bg-white rounded-md p-8 shadow-2xl w-[60%] fixed top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-50 flex"
          >
            <div className=" moduleContent flex flex-col justify-between pr-10">
              <div className=" contentinOzu mb-6">
                <p className="text-gray-800 text-3xl font-semibold mb-4">
                  Xoş Gəlmisiniz!
                </p>
                <p className="text-gray-600 mb-10 w-96 leading-2">
                  Sizi müasir və şık geyim məhsulları ilə ifadə etmək, öz xüsusi
                  tərzinizi tapmaq üçün buradayıq. Onlayn mağazamız sizə xüsusi
                  dizaynlar, keyfiyyətli materiallar və trendlərə uyğun seçimlər
                  təqdim edir. Hər anı özəl etmək üçün alış-verişinizi zövqlə yaşayın!
                </p>
              </div>
              <Link
                to={"/home"}
                onClick={handleClose}
                className=" text-center  bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 focus:outline-none"
              >
                Sayta Kəçid edin...
              </Link>
            </div>
            <div>
              <img
                className=" modulHomeImg  max-h-48 max-w-full object-cover rounded-md "
                src="https://eme-2.myshopify.com/cdn/shop/files/mid_slider_2.png?v=1654685689"
                alt="Product"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ModuleHome;
