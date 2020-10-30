import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const TodoForm = ({ addTodo, input, changeText }) => {
  const classes = useStyles();

  return (
    <form className="add_todo" onSubmit={(e) => addTodo(e)}>
      <TextField
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        size="small"
        value={input}
        onChange={(e) => changeText(e)}
      />
      <Button
        type="submit"
        variant="contained"
        color="default"
        className={classes.button}
      >
        Upload
      </Button>
    </form>
  );
};

export default TodoForm;
