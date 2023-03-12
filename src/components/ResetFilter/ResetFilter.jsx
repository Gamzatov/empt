import React from "react";

export const ResetFilter = ({ setResetFilter, resetFilter }) => {
  const handleReset = () => {
    setResetFilter(!resetFilter);
  };
  console.log("resetFilter", resetFilter);
  return (
    <>
      <div className="btn-wrapper">
        <button onClick={handleReset}>Resset filter</button>
      </div>
    </>
  );
};
