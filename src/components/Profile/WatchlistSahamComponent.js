import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

export default function WatchlistSahamComponent() {
  const classes = useStyles();

  return (
    <List className={(classes.root, classes.taii)}>
      <ListItem>
        <ListItemText primary="CFIN" secondary="Clipan Finance Indonesia TBK" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="ANTM" secondary="Aneka Tambang TBK" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="ADRO" secondary="Adaro Energy TBK" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
