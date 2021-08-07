import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import LoginComponent from "../pages/Auth/LoginComponent";
import LogoutComponent from "../pages/Auth/LogoutComponent";
import HomeComponent from "../pages/Home/HomeComponent";
import UserComponent from "../pages/Home/UserComponent";
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
  container: {
    position: "relative",
  },
});

const NavbarComponent = () => {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState("/");

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

        <Container align="center" maxWidth="sm" className={classes.container}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/profile">
              <ProfileComponent />
            </Route>
            <Route path="/chart">
              <ChartComponent />
            </Route>
            <Route path="/users/:id" exact>
              <UserComponent />
            </Route>
            <Route path="/search">
              <SearchComponent />
            </Route>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
            <Route path="/login">
              <LoginComponent />
            </Route>
            <Route path="/logout">
              <LogoutComponent />
            </Route>
          </Switch>
        </Container>
      </div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={(classes.root, classes.stickToBottom)}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<SearchIcon />}
          component={Link}
          to="/search"
        />
        <BottomNavigationAction
          label="Chart"
          value="/chart"
          icon={<ChartIcon />}
          component={Link}
          to="/chart"
        />
        <BottomNavigationAction
          label="Profile"
          value="/profile"
          icon={<PersonIcon />}
          component={Link}
          to="/profile"
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
