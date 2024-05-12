// import React from "react";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const names = [
//   "Shablonч",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];
// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
// const Letter = () => {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(typeof value === "string" ? value.split(",") : value);
//   };

//   return (
//     <div>
//       <div className="-translate-x-3 translate-y-4">
//         <h2 className="font-semibold text-[16px] leading-[20px] text-[#44444F]">
//           Shablon
//         </h2>
//         <FormControl sx={{ mt: 1, width: 762 }}>
//           <InputLabel id="demo-multiple-name-label" className="">
//             Shablon
//           </InputLabel>
//           <Select
//             labelId="demo-multiple-name-label"
//             id="demo-multiple-name"
//             multiple
//             value={personName}
//             onChange={handleChange}
//             input={<OutlinedInput label="Name" />}
//             MenuProps={MenuProps}
//           >
//             {names.map((name) => (
//               <MenuItem
//                 key={name}
//                 value={name}
//                 style={getStyles(name, personName, theme)}
//               >
//                 {name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>
//       <div>
//         <div className="-translate-x-3 translate-y-12">
//           <h2 className="font-semibold text-[16px] leading-[20px] text-[#44444F]">
//             Link
//           </h2>
//           <div className="mt-2">
//             <TextField
//               id="filled-textarea"
//               label="Multiline Placeholder"
//               placeholder="Placeholder"
//               multiline
//               variant="filled"
//               className="w-[762px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Letter;

import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Shablonч",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function isValidURL(string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(string);
}

const Letter = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [link, setLink] = React.useState("");
  const handleLinkChange = (event) => {
    const { value } = event.target;
    setLink(value);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleLinkBlur = () => {
    if (!isValidURL(link)) {
      alert("Please enter a valid URL");
      setLink("");
    }
  };
  return (
    <div>
      <div className="-translate-x-3 translate-y-4">
        <h2 className="font-semibold text-[16px] leading-[20px] text-[#44444F]">
          Shablon
        </h2>
        <FormControl sx={{ mt: 1, width: 762 }}>
          <InputLabel id="demo-multiple-name-label" className="">
            Shablon
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <div className="-translate-x-3 translate-y-12">
          <h2 className="font-semibold text-[16px] leading-[20px] text-[#44444F]">
            Link
          </h2>
          <div className="mt-2">
            <TextField
              id="filled-textarea"
              label="Enter Link"
              placeholder="https://example.com"
              value={link}
              onChange={handleLinkChange}
              onBlur={handleLinkBlur}
              className="w-[762px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
