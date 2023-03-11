import React from "react";

export const Filter = ({ product, setFromLow, setToLow, toLow, fromLow }) => {
  console.log(
    product
      .map((el) => el.price)
      .sort(function (a, b) {
        return b - a;
      })
  );
  const handleFromLow = () => {
    setFromLow(!fromLow);
    setToLow(false);
  };
  const handleToLow = () => {
    setToLow(!toLow);
    setFromLow(false);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-btns">
        <button onClick={handleFromLow} className={fromLow ? 'active' : ''}>
          Price: Low to High <ion-icon name="chevron-up-outline"></ion-icon>
        </button>
        <button onClick={handleToLow}  className={toLow ? 'active' : ''}>
          Price: High to Low <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};
