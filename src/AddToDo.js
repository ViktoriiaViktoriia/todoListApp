import React, { useState } from "react";

export default function Form({ addTodo }) {
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!name) return;
      addTodo(name, tag);
      setName("");
      setTag("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        ToDo:
        <input
          type="text"
          className="input"
          name="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        Tag:
        <input
          type="text"
          className="input"
          name="tag"
          value={tag}
          onChange={e => setTag(e.target.value)}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    );                   
  }
  