import React from "react";
import { useParams } from "react-router-dom";
export const Product = ({ products }) => {
  console.log("products", products);
  const { id } = useParams();
  return (
    <>
      {products
        .filter((el) => el.id == id)
        .map((el, index) => (
          <div className="product-item-wrapper">
            <div className="product-item-info">
              <div className="item-image">
                <img src={el.image} alt={el.name} />
              </div>
              <div className="item-info">
                <div className="item-title products-title">
                  <p>{el.name}</p>
                </div>
                <div className="item-price products-price">
                  <p>${el.price}</p>
                </div>
                <div className="btn-buy-btn">
                  <button><ion-icon name="cart-outline"></ion-icon> Buy</button>
                </div>
                <div className="item-description">
                  <div className="item-category">
                    <p className="subtitle">Category:</p>
                    <p>{el.category}</p>
                  </div>
                  <div className="item-type">
                    <p className="subtitle">Type:</p>
                    <p>{el.type}</p>
                  </div>
                  <div className="item-material">
                    <p className="subtitle">Material:</p>
                    <p>{el.material}</p>
                  </div>
                  <div className="item-design">
                    <p className="subtitle">Design:</p>
                    <p>
                      {el.design}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-info-description">
              <p>{el.description}</p>
            </div>
          </div>
        ))}
    </>
  );
};
