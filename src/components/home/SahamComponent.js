import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  taii: {
    padding: "0!important",
  },
  percent: {
    fontSize: "12px",
    color: "#009688",
    fontWeight: 800,
  },
}));

export default function SahamComponent(props) {
  const classes = useStyles();
  console.log(props.users);
  return (
    <List
      className={(classes.root, classes.taii)}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" align="left">
          Top Gainers
        </ListSubheader>
      }
    >
      {props.users.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.username} secondary={item.name} />
          <ListItemSecondaryAction className={classes.percent}>
            <Button
              variant="outlined"
              size="small"
              to={`users/` + item.id}
              component={Link}
            >
              View
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
