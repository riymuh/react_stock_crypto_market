import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  taii: {
    padding: "0!important",
  },
}));

export default function SahamComponent() {
  const classes = useStyles();

  return (
    <List className={(classes.root, classes.taii)}>
      <ListItem>
        <ListItemText primary="CFIN" secondary="Clipan Finance Indonesia TBK" />
      </ListItem>
      <ListItem>
        <ListItemText primary="ANTM" secondary="Aneka Tambang TBK" />
      </ListItem>
      <ListItem>
        <ListItemText primary="ADRO" secondary="Adaro Energy TBK" />
      </ListItem>
    </List>
  );
}
