import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import "./scss/Footer.scss"

const AccordionItem = styled(motion.div)`
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
`;

const AccordionTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
`;

function Footer() {
    //footer my animation

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });
    //end
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionToggle = (index) => {
        setOpenAccordion((prev) => (prev === index ? null : index));
    };

    const accordionData = [
        {
            title: 'Contact',
            content: (
                <>
                    <p className='text-2xl mb-10 text-gray-500'>
                        <a href='mailto:contact@example.com'>contact@example.com</a>
                    </p>
                    <p className='text-2xl text-gray-500'>(+88) 123 4566 6868</p>
                    <Link to='/home' className='mt-10 block text-[4rem]'>
                        Kotre
                    </Link>
                </>
            ),
        },
        {
            title: 'Quick Info',
            content: (
                <div className='flex flex-col gap-5'>
                    <Link
                        to='/contact'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Contact us
                    </Link>
                    <Link
                        to='/deliveryshopping'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Delivery Information
                    </Link>
                    <Link
                        to='/policy'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Privacy & Policy
                    </Link>
                    <Link
                        to='/terms'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Terms & Condition
                    </Link>
                    <Link
                        to='/manufactures'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Manufactures
                    </Link>
                </div>
            ),
        },
        {
            title: 'Important Links',
            content: (
                <div className='flex flex-col gap-5'>
                    <Link
                        to='/account'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        My Account
                    </Link>
                    <Link
                        to='/mycart'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        My Cart
                    </Link>
                    <Link
                        to='/login'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Login
                    </Link>
                    <Link
                        to='/wishlist'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Wishlist
                    </Link>
                    <Link
                        to='/checkout'
                        className='text-gray-600 hover:underline hover:translate-x-5 duration-500'
                    >
                        Checkout
                    </Link>
                </div>
            ),
        },
        {
            title: 'Subscribe',
            content: (
                <form className='flex items-center'>
                    <input
                        type='text'
                        id='email'
                        className=' inputSubs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        placeholder='Email address...'
                        required
                    />
                    <button
                        type='button'
                        className=' btnSubs ml-2 inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                    >
                        Subscribe
                    </button>
                </form>
            ),
        },
    ];

    return (
        <div className=''>
            <div className='container mx-auto py-10 flex flex-wrap justify-between'>
                <div className='w-full lg:hidden'>
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <AccordionTitle
                                onClick={() => handleAccordionToggle(index)}
                                className='text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center  p-4 rounded-lg'
                            >
                                {item.title}
                                <span className='text-2xl'>{openAccordion === index ? '-' : '+'}</span>
                            </AccordionTitle>
                            <AnimatePresence>
                                {openAccordion === index && (
                                    <AccordionContent
                                        className='p-4 border-t border-gray-300'
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        {item.content}
                                    </AccordionContent>
                                )}
                            </AnimatePresence>
                        </AccordionItem>
                    ))}
                </div>

                <div className='hidden lg:flex lg:flex-wrap lg:justify-between w-full mx-14'>
                    {accordionData.map((item, index) => (
                        <div key={index} className='lg:w-1/4 mb-8'>
                            <h2 className='text-xl font-bold mb-4'>{item.title}</h2>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center ">
                <animated.div style={fadeIn} className="">
                    <p className="text-sm font-serif italic border-b ">Murad Memmedov</p>
                </animated.div>
            </div>
        </div>
    );
}

export default Footer;
