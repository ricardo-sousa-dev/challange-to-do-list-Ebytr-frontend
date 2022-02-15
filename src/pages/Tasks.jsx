import React from 'react';
import TableTasks from '../components/TableTasks';
import Navbar from '../components/Navbar';

function Tasks() {
  return (
    <div className="tasks-page">
      <Navbar />
      <TableTasks />
    </div>
  );
}

export default Tasks;