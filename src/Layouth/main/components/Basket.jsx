import { useContext, useState } from "react";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BasketContext } from "../../../Context/BasketContext";
import { useEffect } from "react";
import "./scss/basket.scss"

function Basket() {

  //context
   const { basket,GoBasket } = useContext(BasketContext);
  //end
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (basket.length>0){
  basket.forEach(item => {
    totalPrice += item.price
  })}
  return totalPrice}

    const [basketOpen, setBasketOpen] = useState(false);

    const handleBasketOpen = () => {
        setBasketOpen(!basketOpen);
    };

    const closeModal = () => {
        setBasketOpen(false);
    };
    useEffect(() => {
    }, [basket]);
    return (
        <div className="relative">
        <span className="absolute -top-5 right-[-10px] bg-red-900 text-white text-xs rounded-full p-1">{basket.length > 0 ? basket.length : 0}</span>
        {/* Sepetin içeriğini gösteren sidebar */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl text-black transform transition-transform duration-300 ease-in-out ${basketOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Başlık ve Kapatma Butonu */}
          <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h2 className="text-lg font-semibold">  Cart</h2>
            <MdClose id="basketHover"  onClick={closeModal} className="text-2xl cursor-pointer " />
          </div>
  
          {/* Sepet içeriği */}
          {basket.length > 0 && (
          basket.map((product) => (
            <div key={product.id} className="p-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
              <div className="flex items-center mb-4">
                <img src={product.image} alt="Ürün Resmi" className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.price}</p>
                  <p className="text-xs text-gray-500">{product.basketitem.length > 0 ? product.basketitem[0].quantity : 0} sayda</p>
                </div>
                <MdDelete  onClick={()=>{GoBasket(product.id,0)}} className="text-gray-500 ml-auto cursor-pointer" />
              </div>
            </div>
          ))
        )}
          
  
          {/* Toplam fiyat ve alışverişi tamamla butonu */}
          <div className="p-4 bg-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Total:</span>
              <span className="text-lg font-semibold">{calculateTotalPrice()}</span>
            </div>
            <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-300 transition uppercase">Proceed to checkout</button>
          </div>
        </div>
  
        {/* Sepetin açılmasını sağlayan buton */}
        <MdOutlineShoppingCart onClick={handleBasketOpen} className="cursor-pointer text-[20px]" />
      </div>
    );
}

export default Basket;
