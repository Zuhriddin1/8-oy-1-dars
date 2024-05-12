import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import add from "../assets/Add.svg";
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

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

const Letter = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [link, setLink] = React.useState("");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: "Expand",
    },
  ];
  const handleLinkChange = (event) => {
    const { value } = event.target;
    setLink(value);
  };
  const handleChangeItem = (event) => {
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
    <>
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
              onChange={handleChangeItem}
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
      <div className="">
        <div className="translate-y-20 -translate-x-2 flex w-[762px] h-[20px] items-center justify-between">
          <div>
            <h2 className="font-semibold text-[16px] leading-[20px] text-[#44444F]">
              Habar
            </h2>
          </div>
          <div className="flex gap-2 text-[#0062FF]">
            <img src={add} alt="" />
            <p className="font-medium text-[14px] leading-[20px] cursor-pointer">
              Shablon holatida saqlash
            </p>
          </div>
        </div>
        <div className="translate-y-56 -translate-x-2 ">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="O’zbekcha" {...a11yProps(0)} />
              <Tab label="Русский" {...a11yProps(1)} />
              <Tab label="English" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              O’zbekcha
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Русский
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              English
            </TabPanel>
          </SwipeableViews>
          {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={value === index}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${
                  value === index ? transitionDuration.exit : 0
                }ms`,
              }}
              unmountOnExit
            >
              <Fab
                sx={fab.sx}
                aria-label={fab.label}
                color={fab.color}
                className="translate-y-20 "
              >
                {fab.icon}
              </Fab>
            </Zoom>
          ))}
        </div>
      </div>
    </>
  );
};

export default Letter;
