import React, { useEffect, useContext } from 'react';
import { Form } from 'react-bootstrap';
import '../css/components/inputNewTask.css';
import Context from '../context/Context';
import add_task from '../images/add_task.svg';
import api from '../api';

function FormNewTask() {

  const {
    setTasks,
    setIsSaving,
    modalEdit,
    newStatus,
    setNewStatus,
    newTask,
    setNewTask,
    errorTaskInvalid,
    setErrorTaskInvalid,
    setIsSaved,
  } = useContext(Context);

  const localStorageUserData = JSON.parse(localStorage.getItem('userData'));

  let saveTask = {};

  useEffect(() => {
    saveTask = {
      task: newTask,
      status: newStatus,
    };
  }, [ newTask, newStatus ]);

  const handleSubmitTask = async (event) => {
    event.preventDefault();
    
    setIsSaving(true);
    try {
      setNewTask('tarefa');
      setNewStatus('pendente');

      await api.post('/tasks',
        saveTask,
        { headers: { 'authorization': localStorageUserData.token } })
        .then(res => res.data);

      await api.get('/tasks',
        { headers: { 'authorization': localStorageUserData.token } })
        .then(res => setTasks(res.data));

      setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
      }, 5000);
      
      setTimeout(() => {
        setIsSaved(false);
      }, 5000);

    } catch (err) {

      if (err.response.data.status === 400) {
        setErrorTaskInvalid(true);
        setIsSaved(false);
        setIsSaving(false);

        setTimeout(() => {
          setErrorTaskInvalid(false);
          setIsSaved(true);
        }, 5000);
      }
    }
  };

  return (
    <div className="form-new-task">
      {errorTaskInvalid && !modalEdit ? <div className="error-invalid-entries">Dados inválidos! Tente novamente.</div> : null}
      <Form.Control
        isValid={newTask !== '' && newTask !== 'tarefa' && !errorTaskInvalid}
        type="text"
        id="new-task"
        aria-describedby="New Task"
        value={newTask !== 'tarefa' ? newTask : ''}
        className="input-new-task"
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Tarefa"
      />

      <Form.Select
        aria-label="Select Status"
        value={newStatus !== 'pendente' ? newStatus : 'pendente'}
        onChange={(event) => setNewStatus(event.target.value)}
        className="select-status">
        <option defaultValue value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        {modalEdit ? <option value="pronto">Pronto</option> : null}
      </Form.Select>

      {!modalEdit ?
        <button type="button" onClick={handleSubmitTask}>
          <img src={add_task} alt="Add Task" className="img-btn-new-task" />
        </button>
        : null}
    </div>
  );
}

export default FormNewTask;