// App.js

import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // State to store tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    // Filter out the task with the provided taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the tasks state
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
