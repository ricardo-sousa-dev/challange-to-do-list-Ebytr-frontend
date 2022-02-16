import React, { useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import '../css/components/tableTasks.css';
import Context from '../context/Context';
import api from '../api';

function TableTasks() {
  const { userData, tasks, setTasks } = useContext(Context);

  useEffect(() => {
    api.get('/tasks',
      { headers: { 'authorization': userData.data.token } })
      .then(res => setTasks(res.data));
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="item-table">Item</th>
            <th className="task-table">Tarefa</th>
            <th className="date-table">Data</th>
            <th className="status-table">Status</th>

          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td className="item-table">{index + 1}</td>
              <td className="task-table">{task.task}</td>
              <td className="date-table">{task.createdAt}</td>
              <td className="status-table">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableTasks;