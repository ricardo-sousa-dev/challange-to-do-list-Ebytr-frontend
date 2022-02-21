import React from 'react';
import { TableTasks, Navbar, InputNewTask, IsSaving, SimpleFooter } from '../components';
import '../css/pages/tasks.css';

function Tasks() {
  return (
    <div className="tasks-page">
      <div className="tasks-body">
        <Navbar />
        <div className="messages-error-save">
          {' '}
          <IsSaving />
        </div>
        <InputNewTask />
        <TableTasks />
      </div>
      <SimpleFooter />
    </div>
  );
}

export default Tasks;