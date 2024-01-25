import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './scss/Slider.scss'
import 'swiper/css/effect-flip';
import { Link } from "react-router-dom"
import { EffectFlip } from 'swiper/modules';
import Information from './Information';
function Slider() {
  const [isFetchDataCompleted, setFetchDataCompleted] = useState(false);
  const [products, setProduct] = useState([])
  console.log(products)
  const fetchData = async () => {
    try {
      const response = await fetch('http://38.242.233.112:499/api/SliderView');
      const data = await response.json();
      setProduct(data)
      setFetchDataCompleted(true);
      console.log(data, '--3-3-3')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])


  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));



  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);


  const trans = (x, y) => `translate(${x}px, ${y}px)`;

  useEffect(() => {
    const container = containerRef.current;
    const container2 = containerRef2.current;
    const container3 = containerRef3.current;

    if (isFetchDataCompleted && container) {

      // keyframes
      const animateContinuous = () => {
        const update = () => {
          const x = Math.cos(Date.now() * 0.001) * 50;
          const y = Math.sin(Date.now() * 0.001) * 50;
          set({ xy: [x, y] });
          requestAnimationFrame(update);
        };

        update();
      };

      animateContinuous();

      if (products.length > 0) {
        var handleMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          const x = -(e.clientX - rect.left - rect.width / 2) / 5;
          const y = -(e.clientY - rect.top - rect.height / 2) / 5;
          set({ xy: [x, y] });
        };
        var handleMouseLeave = () => {
          set({ xy: [0, 0] });
        };
        container.addEventListener('mousemove', handleMouseMove);

        container.addEventListener('mouseleave', handleMouseLeave);
      }
      if (products.length > 1) {
        var handleMouseMove2 = (e) => {
          const rect = container2.getBoundingClientRect();
          const x = -(e.clientX - rect.left - rect.width / 2) / 5;
          const y = -(e.clientY - rect.top - rect.height / 2) / 5;
          set({ xy: [x, y] });
        };
        var handleMouseLeave2 = () => {
          set({ xy: [0, 0] });
        };
        container2.addEventListener('mousemove', handleMouseMove2);
        container2.addEventListener('mouseleave', handleMouseLeave2);
      }

      if (products.length > 2) {
        var handleMouseMove3 = (e) => {
          const rect = container3.getBoundingClientRect();
          const x = -(e.clientX - rect.left - rect.width / 2) / 5;
          const y = -(e.clientY - rect.top - rect.height / 2) / 5;
          set({ xy: [x, y] });
        };
        var handleMouseLeave3 = () => {
          set({ xy: [0, 0] });
        };
        container3.addEventListener('mousemove', handleMouseMove3);

        container3.addEventListener('mouseleave', handleMouseLeave3);
      }






      // Temizleme
      return () => {
        if (products.length > 0) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (products.length > 1) {
          container2.removeEventListener('mousemove', handleMouseMove2);
          container2.removeEventListener('mouseleave', handleMouseLeave2);
        }
        if (products.length > 2) {
          container3.removeEventListener('mousemove', handleMouseMove3);
          container3.removeEventListener('mouseleave', handleMouseLeave3);
        }

      };
    }
  }, [containerRef, isFetchDataCompleted, set]);
  const containerRefs = [containerRef, containerRef2, containerRef3];
  useEffect(() => {
    const initialAnimation = () => {
      set({ xy: [100, 100] });
      set({ xy: [0, 0], config: { duration: 1000 } });
    };

    initialAnimation();

  }, [set]);

  return (
    <Swiper
      effect={'flip'}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectFlip]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}  // Add autoplay option
    >
      {products.map((product, index) => (

        <SwiperSlide key={index}><>
          <div className='animated-image-container' ref={index === 0 ? containerRefs[0] : index === 1 ? containerRefs[1] : containerRefs[2]}>
            <div style={{ backgroundColor: `${product.color}` }} className='overflow-effect '></div>
            <div className='ove'>
              <animated.img
                src={product.image}
                alt=""
                className='animated-image '
                style={{
                  transform: spring.xy.interpolate(trans),
                }}
              />
              <div>

              </div>
              <div>
                <div>
                  <div className=' sliderContent absolute top-1/3 left-[70%] '>
                    <span className='text-lg text-gray-400 '>{product.name}</span>
                    <h1 className='text-7xl max-w-sm font-semibold mt-5 '>{product.content}</h1>
                    <Link to={"/shop"} className='bg-blue-950 inline-block  text-white p-3 mb-5 hover:bg-gray-500 hover:text-white duration-300'>Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        </SwiperSlide>
      ))}
      <Information />

    </Swiper>


  );
}

export default Slider;
