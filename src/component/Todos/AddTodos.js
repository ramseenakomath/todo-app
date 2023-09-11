import React from 'react';
import { useState } from 'react';

const AddTodos = ({addTask}) => {

  const [value,setValue] = useState("");

  const addItem = ()=>{
    addTask(value);
    setValue("");
  };
  return (
    <>
      <div className='input-container'>
        <input type='text' className='input-box' placeholder='Add Task'
        value={value} onChange={(e) =>{setValue(e.target.value)}}/>
        <button onClick={addItem} className='add-btn'>Add</button>
      </div>
    </>
  )
}

export default AddTodos