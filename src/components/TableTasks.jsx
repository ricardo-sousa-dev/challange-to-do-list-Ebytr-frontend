import React from 'react';
import Table from 'react-bootstrap/Table';
import '../css/components/tableTasks.css';

function TableTasks() {
  return (
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
  );
}

export default TableTasks;