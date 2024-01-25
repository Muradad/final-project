import React from "react";
import { BasketProvider } from './Context/BasketContext';
import { FilterProvider } from './Layouth/main/pages/Filter/FilterContext';
import { FilterDataResProvider } from './Layouth/main/pages/Filter/shopnavbar/Context/FilterDataResContext';
import './index.css';
import { MainRouterDom } from './router';
import { WishlistProvider } from "./context/WishListContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartHomeContext";

function App() {
  return (
    <>

<CartProvider>


       <AuthProvider> 
        <WishlistProvider>
          <FilterDataResProvider>
            <FilterProvider>
              <BasketProvider>
                <MainRouterDom />
              </BasketProvider>
            </FilterProvider>
          </FilterDataResProvider>
        </WishlistProvider>
      </AuthProvider> 
      </CartProvider>

    </>
  );
}

export default App;
