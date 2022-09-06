import React from "react";
import Home from "../components/MainPage/Home";
import Shoes from "../components/Shoes/Shoes";

import Shop from "../components/Jersey/Shop";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shoes productItems={productItems} addToCart={addToCart} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  );
};

export default Pages;
