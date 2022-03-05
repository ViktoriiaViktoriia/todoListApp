import React from 'react';
import Todo from './ToDo.js';
import Form from './AddToDo.js';
import img from './839608.png';

export default function Home() {

  //functional components "todos" and "setTodos" 
  //to handle the state of todo task
  //lists 3 random tasks in a todo-list
  //id: Math.floor(Math.random() * 100)
  const [todos, setTodos] = React.useState([
    { id: 0,
      text: 'make a soup',
      isCompleted: false,
      editing: false,
      tag: 'cooking'
    },
    { id: 1,
      text: 'plant a rose',
      isCompleted: false,
      editing: false,
      tag: 'gardening'
    },
    { id: 2,
      text: 'do cleaning',
      isCompleted: false,
      editing: false,
      tag:'cleaning'
    }
  ]);

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  
  // Add to-do task function
  const addTodo = (text, tag, id) => { 
    const newTodos = [...todos, { text , tag, id: Math.random(), isCompleted: false, date: new Date().toLocaleString()}];
    setTodos(newTodos);
    
  };

  //Complete to-do task function
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //Remove to-do task function
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (id, newtext, newtag) => {
    console.log(todos)
    const newTodos = todos.map((todo) => {
      
      if (id === todo.id) {
       
        return {...todo, id: id, text: newtext, tag: newtag, isCompleted: false}
        
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="home">

      <h2>Welcome to the ToDo application!</h2>

      <div className="todoApp">
        <h1><img className="todo_img" src={img} alt="img"></img>ToDo List</h1>
        <Form addTodo={addTodo} />


        <h2> List of the tasks: </h2>
        
        {todos.map((todo, index) => (
          
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />                   
        ))}
           
      </div>
     
    </div> 

  ); 
}