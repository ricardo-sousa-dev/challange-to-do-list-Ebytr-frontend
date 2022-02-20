import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/components/modalEditTask.css';
import { InputNewTask } from '../components';
import Context from '../context/Context';
import api from '../api';

function ModalEditTask() {

  const {
    setModalEdit,
    modalEdit,
    setIsSaving,
    setNewTask,
    setNewStatus,
    taskInEdition,
    newTask,
    newStatus,
  } = useContext(Context);

  const handleClose = () => {
    setModalEdit(false);
    setNewTask('tarefa');
    setNewStatus('pendente');
  };

  const handleUpdateTask = async () => {

    setModalEdit(false);

    setIsSaving(false);

    const taskUpdated = {
      task: newTask,
      status: newStatus,
    };

    await api.put(`/tasks/${ taskInEdition._id }`, taskUpdated)
      .then(res => res.data);

    setTimeout(() => {
      setIsSaving(true);
    }, 2000);
  };

  return (
    <>
      <Modal show={modalEdit} onHide={handleClose} animation={false}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Editar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputNewTask />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateTask}>
            Salvar tarefa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditTask;