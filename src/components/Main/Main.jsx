import React from "react";
import { DetailFilter } from "../DetailFilter/DetailFilter";
import { PriceRange } from "../PriceRange/PriceRange";
import { Products } from "../Products/Products";
import { Filter } from "../Filter/Filter";
import { ResetFilter } from "../ResetFilter/ResetFilter";
export const Main = ({ products, brands }) => {
  const [minNum, setMinNum] = React.useState(0);
  const [maxNum, setMaxNum] = React.useState(5000);
  const [brandName, setBrandName] = React.useState("");
  const [product, setProduct] = React.useState(products);
  const [fromLow, setFromLow] = React.useState(true);
  const [toLow, setToLow] = React.useState(false);
  const [hideFilter, setHideFilter] = React.useState(false);
  const [resetFilter, setResetFilter] = React.useState(false);
  React.useEffect(() => {
    if (resetFilter) {
      setMinNum(0);
      setMaxNum(5000);
    }
  }, [minNum, maxNum, brandName, setMinNum, setMaxNum, resetFilter]);

  return (
    <>
      <Filter
        setHideFilter={setHideFilter}
        hideFilter={hideFilter}
        product={product}
        setToLow={setToLow}
        fromLow={fromLow}
        toLow={toLow}
        setFromLow={setFromLow}
      />
      <div className="main-section">
        <div className="filter-section">
          <DetailFilter
            brands={brands}
            brandName={brandName}
            setBrandName={setBrandName}
            hideFilter={hideFilter}
            resetFilter={resetFilter}
          />
          <PriceRange
            minNum={minNum}
            maxNum={maxNum}
            setMinNum={setMinNum}
            setMaxNum={setMaxNum}
            resetFilter={resetFilter}
            setResetFilter={setResetFilter}
          />
        </div>

        <div className="products-section">
          <Products
            toLow={toLow}
            fromLow={fromLow}
            minNum={minNum}
            maxNum={maxNum}
            brandName={brandName}
            products={products}
          />
        </div>
      </div>
    </>
  );
};
