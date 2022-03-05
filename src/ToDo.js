import React, { useState } from 'react';
import done from './811868.png';
import edit from './1160515.png';
import img_delete from './1160672.png';

//functional component Todo to handle complete, remove, edit functions
export default function Todo({ todo, index, completeTodo, removeTodo, editTodo }) {
  
  //using useState hook
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTag, setNewTag] = useState("");

  //function to handle set new todo text values in case of edit
  function handleChangeName(e) {
    setNewName(e.target.value);
  }

  //function to handle set new todo tag values in case of edit
  function handleChangeTag(e) {
    setNewTag(e.target.value);
  }
  
  //function to submit new values in case of todo edit
  //todo id is random number 
  function handleSubmit(e) {
    e.preventDefault();
    todo.id = Math.random();
    editTodo(todo.id, newName, newTag);
    setNewName("");
    setNewTag("");
    setEditing(false);
  }

  //edit view of the todo list
  //form with user input to enter new values with cansel and save buttons
  //calls handle change functions
  const editingTemplate = (
    <form className="edit" onSubmit={handleSubmit}>
      <div className="form">
        Enter new text and a tag for the todo: {todo.text}
        <p></p>
        text:
        <input 
        placeholder={todo.text}
        id={todo.id} 
        className="input" 
        type="text"
        value={newName} 
        onChange={handleChangeName}/>
        tag:
        <input 
        placeholder={todo.tag}
        id={todo.id} 
        className="input" 
        type="text"
        value={newTag} 
        onChange={handleChangeTag}/>
      </div>
      <div className="button">
        <button onClick={() => setEditing(false)}>
          Cancel
        </button>
        <button>
          Save
        </button>
      </div>
    </form>
  );

  //view of todos (text, tag, date) when no edit mode
  //with edit button
  //calls setEditing functional component
  const viewTemplate = (
    <div className="view">
      <div>
          <label htmlFor={todo.id}>
            {todo.text} <li className='tag'>tag: {todo.tag}</li><li className='date'>date: {todo.date}</li>
          </label>   
        </div>
        <div className="button">
          <button onClick={() => setEditing(true)}>
          <img className="todo_img_edit" src={edit} alt="edit"></img>Edit 
          </button>
        </div>
    </div>
  );
  
  //return fucntion calls remove and complete functions
  //when todo is completed "line-through" cross line implemented to see the task is done
  //buttons com+plete and remove
  return (
      <div className="todo">  

       <div className = "text" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
       >{editing ? editingTemplate : viewTemplate}</div>       

        <div className="button">
          <button className="button" onClick={() => completeTodo(index)}><img className="todo_img_done" src={done} alt="done"></img>Complete</button>
          <button className="button" onClick={() => removeTodo(index)}><img className="todo_img_delete" src={img_delete} alt="img_delete"></img>Delete</button>
        </div>
      </div>   
    );
  }