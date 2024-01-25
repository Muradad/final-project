import { useState,useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaTwitter, FaInstagram, FaUserAlt, FaBars, FaTimes, FaHeart, } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import "./scss/Header.scss"
import Basket from "./Basket";
import LogAut from "./LogAut";
import HeaderSearch from "./HeaderSearch";
import { AuthContext } from "../../../context/AuthContext";

function Header() {
const {username,fetchData} = useContext(AuthContext)

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  //modal start

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //modal end
  //habburger menu 

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // menu start

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //Navbar scroll
  const [scrolled, setScrolled] = useState(false);
  const handleHeartClick  = async () => {
    await fetchData();
    if (username) {
      // If username is available, navigate to the wishlist
      window.location.href = '/wishlist'; // Use your router's navigation method
    } else {
      // If username is not available, show a SweetAlert
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'You need to be logged in to access the wishlist!',
      });
    }
  };

  const navbarAnimation = useSpring({
    backgroundColor: scrolled ? '#fff' : 'rgba(255, 255, 255, 0.8)',
    boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    borderBottom: scrolled ? '2px solid #ddd' : 'none',
    paddingTop: scrolled ? '10px' : '30px',
    paddingBottom: scrolled ? '20px' : '10px',
  });

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  window.addEventListener('scroll', handleScroll);
  return (
  
    <animated.div className='NavbarNav flex items-center justify-between px-10 text-3xl fixed top-0 left-0 w-full z-50' style={navbarAnimation}>
      <GiHamburgerMenu onClick={handleSidebarOpen} className="cursor-pointer GiHamburgerMenu" />
    
      {/* Navbar */}
      <nav className=" nav hidden md:flex flex-grow justify-center items-center w-full">
        <ul className=" navUl flex space-x-20 text-slate-700 text-[17px] justify-center items-center px-11">
          <Link to={"/home"} className=" NavA hover-underline"><a href="#">Home</a></Link>
          <Link to={"/shop"} className=" NavA hover-underline"><a href="#">Shop</a></Link>
          <Link to={"/about"} className=" NavA hover-underline"><a href="#">About</a></Link>
          <Link to={"/home"} className=" text-black  text-3xl uppercase"><a href="#">kotre</a></Link>
          <Link to={"/contact"} className=" NavA hover-underline"><a href="#">Contact</a></Link>
          <Link to={"./wishlist"} className=" NavA hover-underline"><a href="#">Wishlist</a></Link>
        </ul>
      </nav>
      {/* Navbar end */}

      {/* Icons */}
      <div className=" IconsNavbarItems flex space-x-5 text-[17px] text-gray-700" >
       <HeaderSearch/>
        <Link>
          <LogAut/>
        </Link>

        
          <FaHeart onClick={handleHeartClick} className="cursor-pointer" />
  
        <Basket/>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[380px]  bg-black text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div className="flex justify-end p-4 cursor-pointer">
          <AiOutlineClose className="XHover" onClick={closeSidebar} />
        </div>
        <div class="flex flex-col items-start mx-16">
          <h1 class="text-4xl font-bold mb-4">About Us</h1>
          <p class="text-lg">At Kotre, we put a strong emphasis on simplicity, quality, and usefulness of fashion products over other factors. Our fashion items never get outdated. They are not short-lived like normal fashion clothes.</p>
        </div>

        <div className="flex flex-col items-start mx-16 absolute bottom-32 leading-10 text-lg">
          <a href="">contact@example.com</a>
          <strong>(0123) 456789</strong>
          <div className="mt-11 flex justify-between space-x-5">
            <div className="group">
              <a href="#" className="icon group-hover:scale-110 relative">
                <FaTwitter />
                <span className="icon-label opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-7 left-0 right-0 text-center">Twitter</span>
              </a>
            </div>

            <div className="group">
              <a href="#" className="icon group-hover:scale-110 relative">
                <FaInstagram />
                <span className="icon-label opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-7 left-0 right-0 text-center  text-lg w-24">Instagram</span>
              </a>
            </div>

            <div className="group">
              <a href="#" className="icon group-hover:scale-110 relative">
                <IoLogoGoogleplus />
                <span className="icon-label opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-7 left-0 right-0 text-center">Google+</span>
              </a>
            </div>

            <div className="group">
              <a href="#" className="icon group-hover:scale-110 relative">
                <FaLinkedinIn />
                <span className="icon-label opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-7 left-0 right-0 text-center">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* hambur */}
      <div className="MenuBarsNav">
        <div className="logo text-black ">
          <Link className=" mx-5 mt-2" to={"/home"}>Kotre</Link>
        </div>
      </div>
      <div>
        {menuOpen ? (
          <FaTimes className="text-black FaTimes" onClick={toggleMenu} />
        ) : (
          <FaBars size={23} className="text-black  FaBars" onClick={toggleMenu} />
        )}

        {/* Menü */}
        <div
          className={`fixed top-0 -z-50 left-0 h-full w-[380px] bg-whitecd  text-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >

          <div className=" bg-white shadow-2xl h-full text-center mt-20">
            {/* search */}
            <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Axtar</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder=" Hansi geyimi axtarirsiniz..?" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
            {/* serch */}

            <ul className="  bg-white flex-col flex m-10 leading-[70px] text-white text-[25px] justify-center items-center px-11">
              <Link to={"/home"} className=" NavA hover-underline"><a href="#">Home</a></Link>
              <Link to={"/shop"} className=" NavA hover-underline"><a href="#">Shop</a></Link>
              <Link to={"/about"} className=" NavA hover-underline"><a href="#">About</a></Link>
              <Link to={"/contact"} className=" NavA hover-underline"><a href="#">Contact</a></Link>
              <Link to={"/wishlist"} className=" NavA hover-underline"><a href="#">Wishlist</a></Link>
              <div className="flex  space-x-10 mt-16">
                <Link to={"/wishlist"} className=" NavA hover-underline"><a href="#"><FaTwitter /></a></Link>
                <Link to={"/"} className="  text-black "><a href="#"><FaInstagram /></a></Link>
                <Link to={"/"} className="  text-black"><a href="#"><IoLogoGoogleplus /></a></Link>
                <Link to={"/"} className="  text-black"><a href="#"><FaLinkedinIn /></a></Link>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* hambur */}

    </animated.div>
    
  );
}

export default Header;