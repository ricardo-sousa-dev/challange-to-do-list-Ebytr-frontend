import React from 'react';
import Form from 'react-bootstrap/Form';
import '../css/components/inputNewTask.css';

function FormNewTask() {

  return (
    <>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className="input-new-task"
      />
    </>
  );
}

export default FormNewTask;