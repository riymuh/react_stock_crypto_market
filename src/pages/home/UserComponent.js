import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "left!important",
  },
  inline: {
    display: "inline",
  },
}));

const UserComponent = () => {
  const classes = useStyles();
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [todos, setTodos] = useState([]);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    //const currentIndex = todos.indexOf(value);
    const todo = todos.find((item) => item.id === value);
    const index = todos.findIndex((item) => item.id === value);
    const update = {
      id: todo.id,
      userId: todo.userId,
      title: todo.title,
      completed: !todo.completed,
    };
    const updateTodo = todos.splice(index, 1, update);
    setTodos([...todos, updateTodo]);
  };

  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then(function (response) {
        // handle success
        setUser(response.data);
        axios
          .get("https://jsonplaceholder.typicode.com/todos?userId=" + id)
          .then(function (response) {
            // handle success
            setTodos(response.data);
            console.log(response.data);
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {user.username}
                </Typography>
                {" — " + user.email}
                <br />
                {user.website}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <List className={classes.root}>
        {todos.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`;

          return (
            <ListItem
              key={item.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(item.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default UserComponent;
