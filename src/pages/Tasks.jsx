import React from 'react';
import { TableTasks, Navbar, InputNewTask } from '../components';
import '../css/pages/tasks.css';

function Tasks() {
  return (
    <div className="tasks-page">
      <Navbar />
      <InputNewTask />
      <TableTasks />
    </div>
  );
}

export default Tasks;