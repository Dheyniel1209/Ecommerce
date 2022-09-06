import React from "react";
import { Link } from "react-router-dom";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_shop">
            <Link to="/Buy">SHOP NOW</Link>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
