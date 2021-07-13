import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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

const useStyles = makeStyles({
  stickToTop: {
    width: "100%",
    position: "fixed",
    top: 0,
  },
  tapPanel: {
    marginTop: "50px",
  },
});

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
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
