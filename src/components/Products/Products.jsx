import React from "react";
import { Link } from "react-router-dom";

export const Products = ({ products, minNum, maxNum, brandName, toLow, fromLow,checked }) => {
  const checkedItems = checked.length
  ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
  : "";
  console.log(checkedItems)
  return (
    <>
      {products.filter( (el) => (el.price >minNum && el.price <= maxNum) && el.brand.includes(checkedItems) ).sort(function(a,b){return toLow ?  b.price - a.price : a.price - b.price}).map((el, index) => (
        <div className="products-wrapper" key={index}>
          <div className="products-img">
            <img src={el.image} alt={el.name} />
          </div>
          <div className="products-info">
            <div className="products-title">
              <p>{el.name}</p>
            </div>
            <div className="products-price">
              <p>${el.price}</p>
            </div>
            <div className="products-brand">
              <p>{el.brand}</p>
            </div>
            <div className="products-description">
              <p>{el.description}</p>
            </div>
            <div className="product-link">
              <Link to={`/product/${el.id}`}>View details</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
