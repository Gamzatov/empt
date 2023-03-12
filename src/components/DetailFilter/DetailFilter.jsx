import React from "react";
import { ResetFilter } from "../ResetFilter/ResetFilter";

export const DetailFilter = ({
  brands,
  setBrandName,
  brandName,
  hideFilter,
  resetFilter,
  categories,
  setChecked,
  checked
  
}) => {

  
  const setBrandCheckbox = (e) => {
    if (e.target.checked) {
      setBrandName(e.target.value);
    } else {
      setBrandName("");
    }
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };
  console.log('categories', checked)
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
