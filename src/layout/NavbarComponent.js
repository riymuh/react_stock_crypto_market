import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import HomeComponent from "../pages/home/HomeComponent";
import ProfileComponent from "../pages/Profile/ProfileComponent";
import ChartComponent from "../pages/Chart/ChartComponent";
import SearchComponent from "../pages/Search/SearchComponent";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ChartIcon from "@material-ui/icons/BarChart";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

const NavbarComponent = () => {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log(event);
    //handleRoute(newValue);
  };

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chart">Chart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav> */}

        <Container align="center" maxWidth="sm">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/profile">
              <ProfileComponent />
            </Route>
            <Route path="/chart">
              <ChartComponent />
            </Route>
            <Route path="/search">
              <SearchComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </Container>
      </div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={(classes.root, classes.stickToBottom)}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Chart"
          value="/chart"
          icon={<ChartIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="/profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Router>
  );
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default NavbarComponent;
