import React, { useContext,useState, useEffect } from 'react';
import { WishlistContext } from '../../../context/WishListContext';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
function Wishlist() {
  const { GoWish } = useContext(WishlistContext);
  const [wishlist, setWishlist] = useState([]);
  const token = window.localStorage.getItem('access')
  const getWish = async () => {
    try {
      const response = await fetch('http://38.242.233.112:499/api/GetWishlist',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
    
 
      setWishlist(data)
  
    } catch (error) {

      console.error('----------------------Error fetching data:', error);
    }
  };
  const SetWish = async (id) => {
    try {
      await GoWish(id);
      await getWish();
  console.log('0-o123123123123')
      
    } catch (error) {
      console.error("Wish işlemi sırasında hata oluştu:", error);
    }
  };
  useEffect(() => {

    getWish();
  }, []);


  const styleComponent = {
    marginTop: '200px',
    marginBottom: '200px',
    fontSize: '40px',
    marginLeft: '20%',
  };
  return (
 
    <div className='flex flex-wrap'>
      
     
      {wishlist.length>0?(
      
        wishlist.map((product) => (
       
          <div key={product.id} className="p-4 overflow-y-auto mt-20" style={{ maxHeight: '60vh' }}>
            <div className="flex  mb-4">
              {/* Asagidaki koda fikir vermeyin gece 12 idi axod yox idi */}
              <img src={"http://38.242.233.112:499"+product.image} alt="Ürün Resmi" className="w-52 h-52 object-cover rounded" />
              <div className="ml-4">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500">{product.price} AZN</p>
                <p className="text-xs text-gray-500 line-through">{product.discount_price} </p>
                <MdDelete onClick={() => { SetWish(product.id); }} className="text-gray-500 ml-auto cursor-pointer" />
              </div>
            </div>
           
          </div>
        ))
  ):<><Link style={styleComponent} to='register/'>Please click me to go Register to use this function</Link>
</>}
    </div>
  );
}

export default Wishlist;
