import React, { createContext, useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

   
  
  const token = window.localStorage.getItem('access')
 const GoWish = async (product_id) => {
   try {
     const response = await fetch('http://38.242.233.112:499/api/wish', {
       method: 'POST',
       headers: {
           Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(
           {
               product:product_id,
           }
       )
     });

     if (response.status==200) {
       const newData = await response.json();
       console.log(response,'response')
       Swal.fire({
        text: 'Ugurla elave edildi.',
        icon: 'success',

      })  
     } else if(response.status==201){
      Swal.fire({
        text: 'Ugurla silindi.',
        icon: 'success',

      })
     } else {
      Swal.fire({
        title: 'Qeydiyyat',
        html: '<div style="text-align: center;">\
                 <p>Dilək listinizə əlavə etmək üçün qeydiyyatdan keçin və ya daxil olun.</p>\
               </div>',
        icon: 'warning', 
        confirmButtonText: 'Qeydiyyatdan keç', 
        cancelButtonText: 'İmtina et', 
        showCancelButton: true,
        reverseButtons: true, 
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            text: 'Sizi qeydiyyat səhifəsinə yönləndiririk.',
            icon: 'success',
            timer: 2000, // 
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then(() => {
            if (result.value) {
                window.location.href = '/auth/register';
            }
            window.location.href = '/auth/register';
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Əməliyyat İmtina Edildi',
            text: 'Qeydiyyat prosesi legv edildi.',
            icon: 'error',
            timer: 2000,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
        }
      });
      
     }
   } catch (error) {
     console.error('ayeee error:', error);
   }
 };
 const getWishlistItem = async () => {
  try {
    const response = await fetch('http://38.242.233.112:499/api/getbasket',{
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    setWishlist(data)
    console.log(wishlist,'--------')
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {

  getWishlistItem();
}, []);


  return (
    <WishlistContext.Provider value={{wishlist,setWishlist,GoWish}}>
      {children}
    </WishlistContext.Provider>
  );
};



