import React, {useContext} from 'react';
import { Modal, Button } from 'react-bootstrap';
// import '../css/components/modalEditTask.css';
import Context from '../context/Context';

function ModalEditTask() {
  const { showModalEditTask, setShowModalEditTask } = useContext(Context);

  const handleClose = () => setShowModalEditTask(false);

  // const saveTaskUpdated = async (event) => {
  //     event.preventDefault();

  //     setIsSaving(false);

  //     api.update(`/tasks/${ id }`, id)
  //       .then(res => res.data);

  //     setIsSaving(true);

  //   }

  return (
    <>
      <Modal show={showModalEditTask} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditTask;