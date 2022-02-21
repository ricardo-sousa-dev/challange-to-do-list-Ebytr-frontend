import React from 'react';
import { TableTasks, Navbar, InputNewTask, IsSaving } from '../components';
import '../css/pages/tasks.css';

function Tasks() {
  return (
    <div className="tasks-page">
      <Navbar />
      <div className="messages-error-save">
        {' '}
        <IsSaving />
      </div>
      <InputNewTask />
      <TableTasks />
    </div>
  );
}

export default Tasks;