import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../css/components/isSaving.css';
import Context from '../context/Context';
import { FaCheckDouble } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';

function IsSaving() {
  const { isSaving, errorTaskInvalid, isSaved } = useContext(Context);

  const msgSavingTasks =
    <div className="saving-tasks">
      <Spinner
        animation="border"
        role="status"
        className="spinner"
        variant="secondary"
        size="sm"
      />
      <span>Salvando as tarefas</span>
    </div>;

  const msgSavingTasksSuccess =
    <div className="save-check-tasks">
      <FaCheckDouble />
      <p>Tarefas salvas com sucesso!</p>
    </div>;

  const msgErrorTaskInvalid =
    <div className="save-check-tasks">
      <VscClose />
      <p>Dados inválidos!</p>
    </div>;

  return (
    <div className="isSaving">
      {isSaving && !isSaved && !errorTaskInvalid ? msgSavingTasks : null}
      {!isSaving && isSaved && !errorTaskInvalid ? msgSavingTasksSuccess : null}
      {errorTaskInvalid && !isSaving && !isSaved ? msgErrorTaskInvalid : null}
    </div>
  );
}

export default IsSaving;