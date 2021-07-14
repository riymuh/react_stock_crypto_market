import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SahamComponent from "../../components/home/SahamComponent";
import CryptoComponent from "../../components/home/CryptoComponents";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  stickToTop: {
    width: "100%",
    position: "fixed",
    top: 0,
  },
  tapPanel: {
    marginTop: "50px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    position: "absolute",
    top: -50,
    right: 0,
  },
  input: {},
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangez = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          className={classes.input}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Top Gainers</MenuItem>
          <MenuItem value={20}>Top Loss</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.stickToTop}
      >
        <Tab label="Saham" {...a11yProps(0)} />
        <Tab label="Crypto" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tapPanel}>
        <SahamComponent />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tapPanel}>
        <CryptoComponent />
      </TabPanel>
    </div>
  );
};

export default Home;
