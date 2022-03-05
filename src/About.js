import React from 'react';

//functional component About to implement About/instractions page
export default function About() {
  return (
    <div className="about">
      <h2>About ToDo application</h2>
      This is a basic ToDo application to help User manage daily "to do" tasks. 

      <h3>Instructions</h3>
      
      <h4>How to add a new todo?</h4>
      On the Home page User can add a new todo item using input bar and Add button. 
      Add name and category of the "to do".

      <h4>User control of the todo list</h4>
      <p>User can mark todos as completed, edit or delete them from the list.</p>    

    </div> 

  ); 
}