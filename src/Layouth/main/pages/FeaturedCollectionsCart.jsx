import React, {  useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

function FeaturedCollectionsCart({ FeaturedCollectionsproduct }) {
  const [isHovered, setIsHovered] = useState(false);
  const newArray = Array.from({ length: FeaturedCollectionsproduct.rating }, (_, index) => index + 1);
  return (
    <>
      <div

        className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`${FeaturedCollectionsproduct.id}`}>
          <img
            className={`h-96 rounded-t-lg w-full object-cover transition duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            src={FeaturedCollectionsproduct.image}
            alt="product image"
          />
          <img
            className={`h-96 absolute top-0 left-0 rounded-t-lg w-full object-cover transition duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            src={FeaturedCollectionsproduct.hoverimage}
            alt="hover image"
          />
        </Link>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">{FeaturedCollectionsproduct.stock}</span>
        <div className=' text-center'>

          <div className="mt-4 px-5 pb-5">

            <Link to={`${FeaturedCollectionsproduct.id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-slate-900">{FeaturedCollectionsproduct.name}</h5>
            </Link>
            <div className="mt-2.5 flex items-center">
              <div class="mt-2.5 mb-5 flex items-center">
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p>

                <span className="text-3xl font-bold text-slate-900">{FeaturedCollectionsproduct.discount_price==0?FeaturedCollectionsproduct.price:FeaturedCollectionsproduct.price-FeaturedCollectionsproduct.discount_price}</span>
            <span className="text-sm text-slate-900 line-through">{FeaturedCollectionsproduct.discount_price==0?<></>:FeaturedCollectionsproduct.price}</span>
              </p>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({ length: FeaturedCollectionsproduct.rating }).map((_, index) => (
                  <div key={index}><MdOutlineStar /></div>
                ))}
                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{FeaturedCollectionsproduct.rating}</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCollectionsCart;
