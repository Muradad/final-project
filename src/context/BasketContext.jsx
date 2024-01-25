import { createContext, useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
   const token = window.localStorage.getItem('access')
  const GoBasket = async (product_id,quantity=null) => {
    try {
      const response = await fetch('http://38.242.233.112:499/api/basket', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                product:product_id,
                quantity:quantity
            }
        )
      });

      if (response.ok) {
        const newData = await response.json();
        console.log('istek gonderildi:', newData);
        getBasketItems()
      } else {
        Swal.fire({
          title: 'Qeydiyyat',
          html: '<div style="text-align: center;">\
                   <p>Sebete əlavə etmək üçün qeydiyyatdan keçməlisiniz.!</p>\
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
      console.error('Bir hata oluştu:', error);
    }
  };

  const getBasketItems = async () => {
    try {
      const response = await fetch('http://38.242.233.112:499/api/getbasket',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
      setBasket(data)
      console.log(basket,'--------')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    getBasketItems();
  }, []);

  return (
    <BasketContext.Provider value={{ basket, setBasket, GoBasket }}>
      {children}
    </BasketContext.Provider>
  );
};