import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrol,setScrol] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrol(true);
      } else {
        setScrol(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className={`flex justify-between items-center p-4 border border-b-2 text-black ${scrol?'fixed top-0 bg-white w-full shadow-2xl':''}`}>
        <div className='mx-6'>
          <h1 className='text-2xl font-bold'>Xos gorduk <strong>Murad</strong></h1>
        </div>
        <div className='flex space-x-4 uppercase text-xs'>
          <Link className='nav-link' >
            Sayti ziyaret et
          </Link>
          <Link className='nav-link' >
            Sifreni degis
          </Link>
          <Link className='nav-link' >
            Cixis et
          </Link>
          {/* <MdDarkMode />
          <MdOutlineDarkMode /> */}

        </div>
      </nav>
    </div>
  )
}

export default Navbar
