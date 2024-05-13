// TodoList.js

import React from 'react';

const TodoList = ({ tasks, onDeleteTask }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
