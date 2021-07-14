import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import WatchListSahamComponent from "../../components/Profile/WatchlistSahamComponent";
import WatchlistCryptoComponent from "../../components/Profile/WatchlistCryptoComponent";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  profile: {
    marginTop: "10px",
  },
  tapPanel: {
    marginTop: "0px",
  },
}));

const ProfileComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.profile}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List className={(classes.root, classes.taii)}>
            <Avatar className={(classes.purple, classes.large)}>RM</Avatar>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={(classes.root, classes.taii)}>
            <ListItem>
              <ListItemText primary="@riymuh" secondary="Riyadh Muhammad" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
      </Grid>
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
        <WatchListSahamComponent />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tapPanel}>
        <WatchlistCryptoComponent />
      </TabPanel>
    </div>
  );
};

export default ProfileComponent;
