import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../css/components/isSaving.css';
import Context from '../context/Context';
import { FaCheckDouble } from 'react-icons/fa';

function IsSaving() {
  const { isSaving } = useContext(Context);

  return (
    <div className="isSaving">
      {!isSaving ?
        <div className="saving-tasks">
          <Spinner
            animation="border"
            role="status"
            className="spinner"
            variant="secondary"
            size="sm"
          />
          <span>Salvando as tarefas</span>
        </div> :
        <div className="save-check-tasks">
          <FaCheckDouble />
          <p>Tarefas salvas com sucesso!</p>
        </div>}

    </div>
  );
}

export default IsSaving;