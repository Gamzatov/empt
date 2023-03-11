import React from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";

export const PriceRange = ({maxNum, minNum, setMinNum, setMaxNum}) => {
  // const [minNum, setMinNum] = React.useState(0);
  // const [maxNum, setMaxNum] = React.useState(2500);
  const minmin = 0;
  const maxmax = 5000;
  const [priceRangeValue, setPriceRangeValue] = React.useState([0, 5000]);
  const handlePriceRangeChange = (event, newValue) => {
    setMinNum(newValue[0]);
    setMaxNum(newValue[1]);
    setPriceRangeValue(newValue);
  };

  return (
    <div className="detail-filter">
      <div className="brand-wrapper">
        <p className="title">Price range</p>
      </div>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minmin}
        max={maxmax}
      />
      <Stack direction="row" justifyContent="space-between" sx={{mt:2}} alignItems="center">
        <TextField
          label="min"
          type="text"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={minNum}
          onChange={(e) => {
            setMinNum(Number(e.target.value));
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
        />
        <Typography>-</Typography>
        <TextField
          label="max"
          type="text"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={maxNum}
          onChange={(e) => {
            setMaxNum(Number(e.target.value));
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
    </div>
  );
};
