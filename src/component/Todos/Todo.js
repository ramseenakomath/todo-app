import React from 'react';
import { useState } from 'react';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import './Todo.css'

const Todo = () => {

  const [tasks,setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...tasks,{title}];
    setTasks(newTask);
  };

  const removeTask =(index) => {
    const newTask =[...tasks];
    newTask.splice(index,1);
    setTasks(newTask);
  }

  return (
    <>
      <div className='todo-container'>
        <h1 className='header'>Todo List</h1>
        <AddTodos addTask={addTask} />
        {tasks.map((task,index) => (
          <ListTodos task={task} removeTask={removeTask} index={index} key={index}/>
        ))}
      
     </div>
    </>
  )
}

export default Todo