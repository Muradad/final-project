import React, { useState, useEffect } from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BasketContext } from '../../../context/BasketContext';
import { WishlistContext } from '../../../context/WishListContext';
function Detail() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { basket,GoBasket } = useContext(BasketContext);
  const { GoWish } = useContext(WishlistContext);


  const fetchData = async () => {
    try {
      const response = await fetch(`http://38.242.233.112:499/api/product/${id}`);
      const data = await response.json();
      console.log(data, '213293103');
      setProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  if (!product) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  // Check if product.images is defined and has at least one element

  return (
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative mb-6 lg:mb-10 lg:full">
              <img
                src={product.images && product.images.length>0?product.images[activeTab].image:product.image}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="hidden lg:flex space-x-4">
              {product.images && product.images.length>0?product.images.map((tab, index) => (
                <button
                  key={tab.id}
                  className={`flex-1 p-2 border-2 border-transparent focus:outline-none hover:border-blue-500 transition-all ${index === activeTab
                      ? 'border-blue-500'
                      : ''
                    }`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={product.images && product.images.length>0?tab.image:product.image}
                      alt=""
                      className="object-cover w-full  mb-2 rounded-md h-full"
                    />
                  </div>
                </button>
              )):<></>}
            </div>
            <div className="lg:hidden">
              <button
                className="w-full p-3 text-white bg-blue-950 hover:bg-blue-900 rounded-lg"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? 'Geyimlere baxin' : 'Geyimlere baxin'}
              </button>
              <div className={`mt-4 ${isMobileMenuOpen ? 'grid grid-cols-3 gap-2' : 'hidden'}`}>
           
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="p-4">
          
            </div>
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">{product.name}</span>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                      {product.description}

                </p>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>{product.price}</span>
                  <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">{product.discount_price}</span>

                </p>
                <p className="text-green-600 dark:text-green-300 ">Stock count: {product.stock}</p>
              </div>
  
              <div className="w-32 mb-8 ">
                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder={1} />
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button onClick={()=>{GoBasket(product.id)}} className="flex items-center p-3 border rounded-md  text-black border-black text-3xl  hover:text-white hover:bg-black duration-500">
                    Add to Cart
                  </button>
                </div>
                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button onClick={()=>{GoWish(product.id)}}  className="flex items-center p-3 border rounded-md bg-blue-950 text-white text-4xl hover:bg-white hover:text-black hover:border-black duration-300">
                  <IoHeartOutline />

                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
