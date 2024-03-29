import React from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (

    <div className="todo"

      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)} >Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>



      </div>
    </div>

  )
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value); //add value
    setValue(""); //update the value be added to list
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

    </form>

  );
};

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React Hooks",
      isCompleted: false
    },
    {
      text: "Meet friends for brunch",
      isCompleted: false
    },
    {
      text: "Build a cool application",
      isCompleted: false
    }
  ]);



  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);

  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };





  return (
    <div className="app">
      <div className="todo-list">
        <h1>React Todo App</h1>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}


          />
        ))}

        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}





export default App;
