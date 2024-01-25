import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router-dom'

function CartTwo2() {
    const [cartTwo, setCartTwo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://38.242.233.112:499/api/products2');
                const data = await response.json();
                setCartTwo(data);
                console.log(data, '9999999999999999999999');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(cartTwo, '2039102391029301293')
  const newArray = Array.from({ length: cartTwo.rating }, (_, index) => index + 1);

    return (
        <div className='flex flex-col'>
              <div className='flex justify-center items-center mb-10'>
              <h1 className='text-3xl font-bold'>Featured Product</h1>
            
            </div>
            {cartTwo.map((dt) => (
                <div key={dt.id} className=" flex justify-center items-center ">
                    <div className="w-full max-w-sm border-b border-b-black pt-5">
                        <div className="flex">
                            <div  href="#">
                                <img className="w-32" src={dt.image} />
                            </div>
                            <div className="w-full max-w-sm ">
                                <div className="px-10  leading-10">
                                    <div href="#">
                                        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{dt.name}</h5>
                                    </div>
                                    <div className="">
                                        <span className="text-SM font-bold text-gray-900 dark:text-white">{dt.price} AZN</span>
                                  <span className="text-[12px]  text-gray-500  line-through px-5">{dt.discount_price}</span>

                                    </div>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {Array.from({ length: dt.rating }).map((_, index) => (
                                                <div key={index}><MdOutlineStar /></div>
                                            ))}
                                        </div>
                                        <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{dt.rating}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
export default CartTwo2
