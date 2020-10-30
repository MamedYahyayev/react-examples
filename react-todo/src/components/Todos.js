import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const Todos = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#cfe8fc",
        margin: "50px auto",
        width: "50vw",
        borderRadius: "10px",
      }}
    >
      {props.todos.map((todo) => (
        <List>
          <ListItem>
            <ListItemText style={{ marginBottom: "20px" }} key={todo.id} primary={todo.todo} />
            <Button
              type="submit"
              variant="contained"
              color="default"
              onClick={() => props.deleteTodo(todo.id)}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default Todos;
