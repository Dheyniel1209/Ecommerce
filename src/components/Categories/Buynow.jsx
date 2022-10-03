import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import "./categories.css";

const Category = () => {
  const [data, setData] = useState(Categories);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  /*SearchFilter*/
  const [searchTerm, setSearchTerm] = useState("");

  //Filter for category
  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Filter by Category</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn" onClick={() => setData(Categories)}>
                All
              </button>
              <button className="btn" onClick={() => filterResult("Jersey")}>
                JERSEY
              </button>
              <button className="btn" onClick={() => filterResult("Shorts")}>
                Shorts
              </button>
              <button className="btn" onClick={() => filterResult("Shoes")}>
                Shoes
              </button>
            </div>
            <div className="template_Container">
              {data
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((values) => {
                  const { id, title, image, price } = values;
                  return (
                    <>
                      <div className="card" key={id}>
                        <div className="card-header">
                          <Link to="/product">
                            <img src={image} alt={title} />
                            <div className="product-like">
                              <label>{count}</label> <br />
                              <i
                                className="fa-regular fa-heart"
                                onClick={increment}
                              ></i>
                            </div>
                          </Link>
                        </div>
                        <div className="card-body">
                          <h2 className="titleProduct">{title}</h2>
                          <h3 className="price">₱{price}</h3>
                          <div className="i-rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
