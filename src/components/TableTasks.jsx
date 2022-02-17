import React, { useEffect, useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../css/components/tableTasks.css';
import Context from '../context/Context';
import ModalEditTask from './ModalEditTask';
import api from '../api';

function TableTasks() {
  const {
    userData,
    tasks,
    setTasks,
    isSaving,
    setIsSaving,
    setShowModalEditTask,
    setTaskInEdition,
    setStatusPronto
  } = useContext(Context);

  useEffect(() => {
    api.get('/tasks',
      { headers: { 'authorization': userData.data.token } })
      .then(res => setTasks(res.data));
  }, [ isSaving ]);

  const updateTask = async ({ target: { _id, task, createdAt, status } }) => {

    setTaskInEdition({ _id, task, createdAt, status });
    setStatusPronto(true);
    setShowModalEditTask(true);

  };

  const deleteTask = (idTask) => {
    setIsSaving(false);

    api.delete(`/tasks/${ idTask }`, idTask);

    setTimeout(() => {
      setIsSaving(true);
    }, 2000);
  };

  return (
    <>
      <ModalEditTask />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="item-table">Item</th>
            <th className="task-table">Tarefa</th>
            <th className="date-table">Criado em</th>
            <th className="status-table">Status</th>
            <th className="buttons-table"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td className="item-table">{index + 1}</td>
              <td className="task-table">{task.task}</td>
              <td className="date-table">{task.createdAt}</td>
              <td className="status-table">{task.status}</td>
              <td className="buttons-table">
                <Button
                  variant="outline-secondary"
                  type="button"
                  className="update-button"
                  onClick={(event) => updateTask(event)}
                >
                  Editar
                </Button>
                <Button
                  variant="outline-secondary"
                  type="button"
                  value={task._id}
                  className="delete-button"
                  onClick={(event) => deleteTask(event.target.value)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableTasks;