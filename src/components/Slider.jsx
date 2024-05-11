import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function valueText(value) {
  return `${value}`;
}
function SliderTime() {
  const [value, setValue] = React.useState([80, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="flex items-center mt-[29px] ml-1">
        <Checkbox {...label} defaultChecked color="success" />
        <p>Habar yuborilmaydigan vaqt</p>
      </div>
      <Box sx={{ width: 1300 }}>
        <Slider
          className="ml-[70px]"
          color="danger"
          getAriaLabel={() => "Time range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
        />
      </Box>
    </div>
  );
}

export default SliderTime;
