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

export default function WatchlistCryptoComponent() {
  const classes = useStyles();

  return (
    <List className={(classes.root, classes.taii)}>
      <ListItem>
        <ListItemText primary="BTC" secondary="Bitcoin" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="ETH" secondary="Ethereum" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="ADA" secondary="Cardano" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="BNB" secondary="Binace Smart Chain" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="DOT" secondary="Polkadot" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="MATIC" secondary="Polygon" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="TRX" secondary="TRON" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="KSM" secondary="Kusama" />
        <ListItemSecondaryAction className={classes.percent}>
          23%
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
