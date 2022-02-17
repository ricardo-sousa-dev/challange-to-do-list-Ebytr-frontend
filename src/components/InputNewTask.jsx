import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import '../css/components/inputNewTask.css';
import Context from '../context/Context';
import add_task from '../images/add_task.svg';
import api from '../api';

function FormNewTask() {
  const { userData, setTasks, setIsSaving } = useContext(Context);
  const [ newTask, setNewTask ] = useState('');
  const [ newStatus, setNewStatus ] = useState('');

  const saveTask = {
    task: newTask,
    status: newStatus
  };

  const handleSubmit = async (event) => {
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
        placeholder="Nova tarefa"
      />

      <Form.Select
        aria-label="Select Status"
        onChange={(event) => setNewStatus(event.target.value)}
        className="select-status">
        <option defaultValue>Status</option>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="pronto">Pronto</option>
      </Form.Select>

      <button type="button" onClick={handleSubmit}>
        <img src={add_task} alt="Add Task" className="img-btn-new-task" />
      </button>
    </div>
  );
}

export default FormNewTask;