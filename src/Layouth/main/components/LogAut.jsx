import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function LogAut() {
  const [logAut, setLogAut] = useState(false);
  const [userModal, setuserModal] = useState(false);
  const [name, setName] = useState('');
  const [username,setUsername] = useState('')
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      const response = await fetch('http://38.242.233.112:499/api/check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.token === true) {
        setLogAut(true);
        setName(data.name);
        setUsername(data.username)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleDiv = () => {
    setuserModal(!userModal);
  };

  const handleLogout = () => {
    localStorage.removeItem('access');
    setLogAut(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaUserAlt onClick={toggleDiv} className="cursor-pointer" />
      </motion.div>
      <AnimatePresence>
        {userModal && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            className="fixed top-[66px]   right-[0] transform translate-x-1/2 -translate-y-1/2  text-black p-5 rounded-md "
          >
            {logAut ? (
              <div>
               <div className='flex'>
               <p className='uppercase'>{name}</p>
               </div>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-900 text-white  px-10 py-. rounded-md"
                  type="button"
                >
                  Logout
                </motion.button>
              </div>
            ) : (
              <div>
                <Link
                  to="/auth/login"
                  className="border border-black text-black px-4  rounded-md mr-2 hover:bg-black hover:text-white duration-500"
                  type="button"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-black border border-black text-white px-4  rounded-md hover:bg-white hover:text-black duration-300 "
                  type="button"
                >
                  Register
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LogAut;
