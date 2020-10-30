import { useState } from "react";
import "./App.css";
import db from "./firebase";
import { useEffect } from "react";
import Todos from "./components/Todos";
import firebase from "firebase";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([{}]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  }, []);

  const changeText = (e) => setInput(e.target.value);

  const addTodoHandler = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const deleteTodoHandler = (todoId) => {
    db.collection("todos").doc(todoId).delete();
  };

  return (
    <div className="App">
      <Header />

      <TodoForm
        addTodo={addTodoHandler}
        input={input}
        changeText={changeText}
      />

      <Todos todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
