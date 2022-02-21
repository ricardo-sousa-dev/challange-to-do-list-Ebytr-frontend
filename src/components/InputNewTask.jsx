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

    try {
      setNewStatus('pendente');

      if (newTask !== '') {
        await api.post('/tasks',
          saveTask,
          { headers: { 'authorization': localStorageUserData.token } })
          .then(res => res.data);

        await api.get('/tasks',
          { headers: { 'authorization': localStorageUserData.token } })
          .then(res => setTasks(res.data));

        setIsSaving(true);

        setTimeout(() => {

          setIsSaving(false);
          setIsSaved(true);

          setTimeout(() => {
            setIsSaved(false);
          }, 5000);

        }, 5000);

        setNewTask('');

      } else {
        alert('Preencha o campo de tarefa');
      }

    } catch (err) {
      alert('Algo deu errado :(');
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="form-new-task">
      <Form.Control
        isValid={newTask !== ''}
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