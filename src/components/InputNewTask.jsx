import React, { useEffect, useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import '../css/components/inputNewTask.css';
import Context from '../context/Context';
import add_task from '../images/add_task.svg';
import api from '../api';

function FormNewTask() {

  const {
    userData,
    setTasks,
    setIsSaving,
    modalEdit,
    // taskInEdition
  } = useContext(Context);

  const [ newTask, setNewTask ] = useState('tarefa');
  const [ newStatus, setNewStatus ] = useState('pendente');
  console.log('>>>>>>>>>>>>> ~ newTask', newTask);
  console.log('>>>>>>>>>>>>> ~ newStatus', newStatus);

  let saveTask = {};

  useEffect(() => {
    saveTask = {
      task: newTask,
      status: newStatus,
    };
  }, [ newTask, newStatus ]);

  const handleSubmitNewTask = async (event) => {
    event.preventDefault();

    setIsSaving(false);

    api.post('/tasks',
      saveTask,
      { headers: { 'authorization': userData.data.token } })
      .then(res => res.data);

    api.get('/tasks',
      { headers: { 'authorization': userData.data.token } })
      .then(res => setTasks(res.data));

    setTimeout(() => {
      setIsSaving(true);
    }, 2000);
  };

  return (
    <div className="form-new-task">
      <Form.Control
        type="text"
        id="new-task"
        aria-describedby="New Task"
        className="input-new-task"
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Tarefa"
      />

      <Form.Select
        aria-label="Select Status"
        onChange={(event) => setNewStatus(event.target.value)}
        className="select-status">
        <option defaultValue value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        {modalEdit ? <option value="pronto">Pronto</option> : null}
      </Form.Select>

      {!modalEdit ?
        <button type="button" onClick={handleSubmitNewTask}>
          <img src={add_task} alt="Add Task" className="img-btn-new-task" />
        </button>
        : null}
    </div>
  );
}

export default FormNewTask;