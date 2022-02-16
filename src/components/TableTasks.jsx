import React, { useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
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
  console.log(tasks);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="item-table">Item</th>
            <th className="task-table">Tarefa</th>
            <th className="description-table">Descrição</th>
            <th className="status-table">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ?
            tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )) : null}
        </tbody>
      </Table>
    </>
  );
}

export default TableTasks;