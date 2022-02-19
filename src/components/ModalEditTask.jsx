import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/components/modalEditTask.css';
import { InputNewTask } from '../components';
import Context from '../context/Context';

function ModalEditTask() {

  const {
    setModalEdit,
    modalEdit,
    setNewTask
  } = useContext(Context);

  const handleClose = () => {
    setModalEdit(false);
    setNewTask('tarefa');
  };

  // const handleSubmitEditTask = () => {
  //   event.preventDefault();
  //   setIsSaving(false);

  //   api.update(`/tasks/${ id }`, id)
  // }

  // const saveTaskUpdated = async (event) => {
  //     event.preventDefault();

  //     setIsSaving(false);

  //     api.update(`/tasks/${ id }`, id)
  //       .then(res => res.data);

  //     setIsSaving(true);

  //   }

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
          <Button variant="primary" onClick={handleClose}>
            Salvar tarefa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditTask;