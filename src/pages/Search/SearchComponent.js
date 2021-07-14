import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ResultComponent from "../../components/search/ResultComponent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    flex: 1,
    width: "100%!important",
    marginTop: "10px",
  },
  iconButton: {
    padding: 10,
    marginTop: "10px",
  },
  search: {},
}));
const SearchComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <InputBase
            className={classes.input}
            placeholder="Search code stock or crypto"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>

      <ResultComponent />
    </div>
  );
};

export default SearchComponent;
