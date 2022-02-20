import React, { useEffect, useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../css/components/tableTasks.css';
import Context from '../context/Context';
import ModalEditTask from './ModalEditTask';
import api from '../api';

function TableTasks() {
  const localStorageUserData = JSON.parse(localStorage.getItem('userData'));

  const {
    tasks,
    setTasks,
    isSaving,
    setIsSaving,
    setTaskInEdition,
    setModalEdit,
    setNewTask,
    setNewStatus,
  } = useContext(Context);

  useEffect(() => {
    api.get('/tasks',
      { headers: { 'authorization': localStorageUserData.token } })
      .then(res => setTasks(res.data));
  }, [ isSaving ]);

  const updateTask = async (objectToUpdate) => {
    setTaskInEdition(objectToUpdate);
    setNewTask(objectToUpdate.task);
    setNewStatus(objectToUpdate.status);
    setModalEdit(true);
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
              <td className="task-table">
                <button>
                  {task.task}
                </button>
              </td>
              <td className="date-table">{task.createdAt}</td>
              <td className="status-table">{task.status}</td>
              <td className="buttons-table">
                <Button
                  variant="outline-secondary"
                  type="button"
                  className="update-button"
                  onClick={() => updateTask({ _id: task._id, task: task.task, status: task.status })}
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