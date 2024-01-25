import React from 'react';
import "./scss/About.scss"
import "./scss/About.responsive.scss"
import AboutSwiperData from './AboutSwiperData';
import AboutCreativeTeam from './AboutCreativeTeam';
import AboutLogoDesign from './AboutLogoDesign';
import {motion} from "framer-motion"
function About() {
  return (
    <motion.div className='mt-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div className="about flex justify-evenly">
        <div className="aboutImg mx-11 mb-5">
          <img className=' AboutIMG w-[100%]' src="https://eme-2.myshopify.com/cdn/shop/files/about2_845x500.jpg?v=1655620701" alt="" />
        </div>
        <div className="aboutContent max-w-xl mt-20 ">
          <p className='mb-10'>Suspe ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit. ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit es</p>
          <div className="adress mb-10">
            <h1>ADDRESS :</h1>
            <p>1800 Abbot Kinney Mins. Unit London, UK</p>
          </div>
          <div className="phone mb-10">
            <h2>Phone :</h2>
            <p>Mobile: (+88) – 2365 - 1254</p>
          </div>
          <div className="email">
            <h2>EMAIL :</h2>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
      {/* flex */}

      <div class="onAllOrders flex justify-around items-center mt-10">
        <div class="border-r pr-4">
          <h1 class="mb-4">FREE SHIPPING</h1>
          <p class="mt-4">On all orders over $75.00</p>
        </div>
        <div class="border-r px-4">
          <h1 class="mb-4">24/7 Support</h1>
          <p class="mt-4">On all orders over $75.00</p>
        </div>
        <div class="pl-4">
          <h1 class="mb-4">FREE RETURNS</h1>
          <img className='w-[150px]' src="https://eme-2.myshopify.com/cdn/shop/files/paypol_295x.png?v=1613694791" alt="" />
        </div>
      </div>
      
      <AboutSwiperData/>
      <AboutCreativeTeam/>
      <AboutLogoDesign/>

    </motion.div>
  )
}

export default About;
