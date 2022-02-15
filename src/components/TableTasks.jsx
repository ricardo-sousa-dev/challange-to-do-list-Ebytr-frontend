import React, { useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import '../css/components/tableTasks.css';
import Context from '../context/Context';
import api from '../api';

function TableTasks() {
  const { userData, tasks, setTasks } = useContext(Context);

  useEffect(() => {
    setTasks(api.get('/tasks',
      { headers: { authorization: userData.token } }));
  }, []);

  return (
    <>
      {tasks.map(task => task)}
      <Table responsive className="table-tasks">
        <thead>
          <tr>
            <th className="item-table">Item</th>
            <th className="task-table">Tarefa</th>
            <th className="status-table">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="item-table">1</td>
            <td className="task-table">atualizar o Linkedin</td>
            <td className="status-table">em andamento</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TableTasks;