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

export default function CryptoComponent() {
  const classes = useStyles();

  return (
    <List className={(classes.root, classes.taii)}>
      <ListItem>
        <ListItemText primary="BTC" secondary="Bitcoin" />
      </ListItem>
      <ListItem>
        <ListItemText primary="ETH" secondary="Ethereum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="ADA" secondary="Cardano" />
      </ListItem>
      <ListItem>
        <ListItemText primary="BNB" secondary="Binace Smart Chain" />
      </ListItem>
      <ListItem>
        <ListItemText primary="DOT" secondary="Polkadot" />
      </ListItem>
      <ListItem>
        <ListItemText primary="MATIC" secondary="Polygon" />
      </ListItem>
      <ListItem>
        <ListItemText primary="TRX" secondary="TRON" />
      </ListItem>
      <ListItem>
        <ListItemText primary="KSM" secondary="Kusama" />
      </ListItem>
    </List>
  );
}
