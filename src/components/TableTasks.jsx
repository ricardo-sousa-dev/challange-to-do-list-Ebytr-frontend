import React, { useState, useEffect, useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../css/components/tableTasks.css';
import Context from '../context/Context';
import ModalEditTask from './ModalEditTask';
import api from '../api';
import { FaArrowsAltV } from 'react-icons/fa';


function TableTasks() {
  const localStorageUserData = JSON.parse(localStorage.getItem('userData'));
  const [ orderTask, setOrderTask ] = useState(false);
  const [ orderDate, setOrderDate ] = useState(false);
  const [ orderStatus, setOrderStatus ] = useState(false);
  const [ iconOrder, setIconOrder ] = useState();

  const {
    tasks,
    setTasks,
    isSaving,
    setIsSaved,
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

    sortTasks('order-task');
  }, [ isSaving ]);

  const updateTask = async (objectToUpdate) => {
    setTaskInEdition(objectToUpdate);
    setNewTask(objectToUpdate.task);
    setNewStatus(objectToUpdate.status);
    setModalEdit(true);
  };

  const deleteTask = (idTask) => {
    try {
      api.delete(`/tasks/${ idTask }`, idTask);

      setNewStatus('pendente');
      setNewTask('');

      setIsSaving(true);

      setTimeout(() => {

        setIsSaving(false);
        setIsSaved(true);

        setTimeout(() => {
          setIsSaved(false);
        }, 5000);

      }, 5000);

    } catch (err) {
      alert('Algo deu errado :(');
      console.log(err.response.data.message);
    }
  };

  const sortTasks = (order) => {
    let newTasksOrdered;

    switch (order) {
    case 'order-task':

      setIconOrder('order-task');

      if (orderTask) {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.task < b.task) return -1;
          if (a.task > b.task) return 1;
          return 0;
        });
      } else {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.task > b.task) return -1;
          if (a.task < b.task) return 1;
          return 0;
        });
      }

      setOrderTask(!orderTask);
      setTasks(newTasksOrdered);
      break;

    case 'order-status':

      setOrderTask(false);
      setOrderDate(false);
      setIconOrder('order-status');

      if (orderStatus) {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        });
      } else {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.status > b.status) return -1;
          if (a.status < b.status) return 1;
          return 0;
        });
      }

      setOrderStatus(!orderStatus);
      setTasks(newTasksOrdered);
      break;

    case 'order-date':

      setOrderTask(false);
      setOrderStatus(false);
      setIconOrder('order-date');

      if (orderDate) {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.createdAt < b.createdAt) return -1;
          if (a.createdAt > b.createdAt) return 1;
          return 0;
        });
      } else {
        newTasksOrdered = tasks.sort((a, b) => {
          if (a.createdAt > b.createdAt) return -1;
          if (a.createdAt < b.createdAt) return 1;
          return 0;
        });
      }

      setOrderDate(!orderDate);
      setTasks(newTasksOrdered);
      break;

    default:
      break;
    }
  };

  return (
    <>
      <ModalEditTask />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="item-table">Item</th>
            <th className="task-table">
              <button
                className="buttonOrderTask"
                value="order-task"
                onClick={(event) => sortTasks(event.target.value)}>
                {iconOrder === 'order-task' ? <FaArrowsAltV className="iconOrder" /> : null}
                Tarefa
              </button>
            </th>
            <th className="date-table">
              <button
                className="buttonOrderDate"
                value="order-date"
                onClick={(event) => sortTasks(event.target.value)}>
                {iconOrder === 'order-date' ? <FaArrowsAltV className="iconOrder" /> : null}
                Criado em
              </button>
            </th>
            <th className="status-table">
              <button
                className="buttonOrderStatus"
                value="order-status"
                onClick={(event) => sortTasks(event.target.value)}>
                {iconOrder === 'order-status' ? <FaArrowsAltV className="iconOrder" /> : null}
                Status
              </button>
            </th>
            <th className="buttons-table"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td className="item-table">{index + 1}</td>
              <td>{task.task}</td>
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