import React from "react";
import { ResetFilter } from "../ResetFilter/ResetFilter";

export const DetailFilter = ({
  brands,
  setBrandName,
  brandName,
  hideFilter,
  resetFilter,
}) => {
  const setBrandCheckbox = (e) => {
    if (e.target.checked) {
      setBrandName(e.target.value);
    } else {
      setBrandName("");
    }
  };
  return (
    <div className={hideFilter ? "none" : "detail-filter"}>
      <div className="brand-wrapper">
        <p className="title">Brands</p>
        {brands.map((el, index) => (
          <div className="filter-input-wrapper" key={`${index}${el}`}>
            <div className="filter-item">
              <div className="filter-checkbox">
                <input
                  onClick={setBrandCheckbox}
                  type="checkbox"
                  className="checkbox"
                  checked={ false || resetFilter ? true : false}
                  value={el}
                />
              </div>
              <div className="filter-name">
                <p> {el}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
