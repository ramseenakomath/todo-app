import React from 'react';

const ListTodos = ({task, index,removeTask}) => {
  return (
    <>
      <div className='list-container'>
        {task.title}
        <button onClick={removeTask} className='delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default ListTodos