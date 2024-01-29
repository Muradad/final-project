import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../Context/BasketContext';
import "../pages/scss/Cart.scss"
import { WishlistContext } from '../../../context/WishListContext';
import { AuthContext } from '../../../context/AuthContext';
import { MdOutlineStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { CartContext, CartProvider } from '../../../context/CartHomeContext';


 
function Cart({product}) {
  const { fetchData } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const { basket, setBasket, GoBasket } = useContext(BasketContext);
  const { username } = useContext(AuthContext);
  const { GoWish } = useContext(WishlistContext);
  
  const toggleDiv = () => {
    setuserModal(!userModal);
  };
  const Wish = async (id) => {
    try {
      await GoWish(id);
      await fetchData();
    } catch (error) {
      console.error("Wish işlemi sırasında hata oluştu:", error);
    }
  };
  const isUserInWishlist = product.wishlist.some(wishlistItem => wishlistItem.username === username);
  const dynamicClassName = isUserInWishlist
  
  ? 'border border-gray-600 p-2 rounded-md hover:bg-black hover:text-white duration-500 cursor-pointer bg-red-600 text-white'
  : 'border border-gray-600 p-2 rounded-md hover:bg-black hover:text-white duration-500 cursor-pointer bg-red-600 text-black';

  const newArray = Array.from({ length: product.rating }, (_, index) => index + 1);
  console.log(dynamicClassName,'-----------------------------')
  return (
    <div
      className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`${product.id}`}>
        <img
          className={`h-96 rounded-t-lg w-full object-cover transition duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          src={product.image}
        />
        <img
          className={`h-96 absolute top-0 left-0 rounded-t-lg w-full object-cover transition duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          src={product.hoverimage}
          alt="hover image"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <div className='flex justify-between items-center'>
          <h5 className="text-2xl font-semibold tracking-tight text-slate-900">{product.name}</h5>
         <button  onClick={() => Wish(product.id)}
 
         className={dynamicClassName}
         > <FaHeart /></button>

        </div>
        <div className="mt-2.5 flex items-center">
          <div class="mt-2.5 mb-5 flex items-center">
            <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {Array.from({ length: product.rating }).map((_, index) => (
          <div key={index}><MdOutlineStar /></div>
        ))}
      </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{product.discount_price==0?product.price:product.price-product.discount_price}</span>
            <span className="text-sm mx-3 text-slate-900 line-through">{product.discount_price==0?<></>:product.price}</span>
          </p>
          <button  onClick={() => GoBasket(product.id)}  className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className=" mr-2 h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
         Sebete At
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
