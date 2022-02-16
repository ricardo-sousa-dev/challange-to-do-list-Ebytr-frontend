import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/components/inputNewTask.css';
import add_task from '../images/add_task.svg';

function FormNewTask() {

  return (
    <div className="form-new-task">
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className="input-new-task"
      />
      <button type="button"><img src={add_task} alt="Add Task" /></button>
    </div>
  );
}

export default FormNewTask;