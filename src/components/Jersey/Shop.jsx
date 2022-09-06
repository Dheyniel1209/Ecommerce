import React from "react";
import ShopCart from "./ShopCart";
import "./style.css";
import { Link } from "react-router-dom";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex"></div>
              <div className="heading-right row ">
                <Link to="/Buy">View all</Link>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
