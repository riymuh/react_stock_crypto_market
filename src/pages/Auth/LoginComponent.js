import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    minWidth: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    marginBottom: "5px",
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <AccountBalanceWalletIcon fontSize="large" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            INVESTING.ID
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="standard-textarea"
            label="Email"
            placeholder="Enter your email"
            multiline
            className={classes.input}
          />

          <TextField
            id="filled-password-input"
            label="Password"
            placeholder="Enter your password"
            multiline
            className={classes.input}
            type="password"
          />
          <Button variant="outlined" mt={2} className={classes.input}>
            LOGIN
          </Button>
          <Typography variant="button" display="block" gutterBottom>
            Or
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            mt={2}
            className={classes.input}
          >
            CONTINUE WITH GOOGLE
          </Button>
          <Typography variant="caption" display="block" gutterBottom>
            Forgot Password?
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginComponent;
