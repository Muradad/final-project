import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FilterContext } from '../FilterContext';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { WishlistContext } from '../../../../../context/WishListContext';
import { BasketContext } from '../../../../../Context/BasketContext';
import { AuthContext } from '../../../../../context/AuthContext';

function Cart() {
  const { productwf } = useContext(FilterContext);

  console.log(productwf, '---------fdf-----')
  const newArray = Array.from({ length: productwf.rating }, (_, index) => index + 1);
  const { GoWish } = useContext(WishlistContext);
  const { basket, setBasket, GoBasket } = useContext(BasketContext);
  const { username } = useContext(AuthContext);
  if (!productwf) {
    console.error("productwf is undefined");
    return null; 
  }
  const Wish = async (id) => {
    try {
      await GoWish(id);
      await fetchData();
    } catch (error) {
      console.error("Wish işlemi sırasında hata oluştu:", error);
    }
  };
  const isUserInWishlist = productwf.wishlist && productwf.wishlist.some(wishlistItem => wishlistItem.username === username);


  const dynamicClassName = isUserInWishlist
  ? 'border border-gray-600 p-2 rounded-md hover:bg-black hover:text-white duration-500 cursor-pointer bg-red-600 text-white'
  : 'border border-gray-600 p-2 rounded-md hover:bg-black hover:text-white duration-500 cursor-pointer bg-red-600 text-black';
  return (
    <div className="container mx-auto my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productwf && productwf.map((productwf) => (
        <div key={productwf.id} className="group relative overflow-hidden bg-white border rounded-lg shadow-md">
          <Link to={`/home/${productwf.id}`} className="relative overflow-hidden aspect-w-2 aspect-h-3">
            <img
              className="object-cover w-full h-96 transform scale-100 group-hover:scale-105 transition-transform duration-300"
              src={productwf.image}
              alt={productwf.name}
            />
            <HoverImageEffect hoverImage={productwf.image} />
          </Link>
          <div className="p-4">
            <div className='flex justify-between items-center'>
           <p>
           {productwf.name.length > 30
                ? productwf.name.slice(0, 30) + '...'
                : productwf.name}
           </p>
              <div className='flex justify-between items-center'>
              <button  onClick={() => Wish(productwf.id)}
 
 className={dynamicClassName}
 > <FaHeart /></button>

              </div>
            </div>
            <div className="star-container flex items-center space-x-1 rtl:space-x-reverse">
              <span className="rating-count bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5  rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {productwf.rating}
              </span>
              {/* Render stars */}
              {Array.from({ length: productwf.rating }).map((_, index) => (
                <div key={index}><MdOutlineStar /></div>
              ))}
              {/* Render rating count */}

            </div>

            <div className="flex items-center justify-between mt-2.5">
              <span className="text-3xl font-bold text-slate-900">{productwf.discount_price == 0 ? productwf.price : productwf.price - productwf.discount_price}</span>
              <span className="text-sm text-slate-900 line-through">{productwf.discount_price == 0 ? <></> : productwf.price}</span>
              <div className="">
                <button onClick={() => GoBasket(productwf.id)} className="flex items-center rounded-md bg-slate-900 px-2 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" mr-2 h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Sebete At
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
      {productwf.length === 0 && (
        <h1 className='text-red-900 uppercase font-bold'>Bağışlayın, məlumat yoxdur.</h1>
      )}
    </div>


  );
}

const HoverImageEffect = ({ hoverImage }) => {
  const [hover, setHover] = useState(false);

  const imageSpring = useSpring({
    opacity: hover ? 1 : 0,
    transform: hover ? 'scale(1)' : 'scale(0.8)',
  });

  return (
    <animated.img
      className="absolute inset-0 w-full h-full object-cover"
      src={hoverImage}
      alt="hover image"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={imageSpring}
    />
  );
};

export default Cart;
