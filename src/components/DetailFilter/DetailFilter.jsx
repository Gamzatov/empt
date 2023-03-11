import React from "react";

export const DetailFilter = ({ brands, setBrandName, brandName, hideFilter }) => {
  const setBrandCheckbox = (e) => {
    
    if (e.target.checked) {
      setBrandName(e.target.value);
    }else {
      setBrandName('');
    }
  };
  return (
    <div className={hideFilter ? 'none' : "detail-filter"}>
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
