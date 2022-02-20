import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ userData, setUserData ] = useState({});
  const [ tasks, setTasks ] = useState([]);
  const [ isSaving, setIsSaving ] = useState(true);
  const [ taskInEdition, setTaskInEdition ] = useState({});
  const [ modalEdit, setModalEdit ] = useState(false);
  const [ newTask, setNewTask ] = useState('tarefa');
  const [ newStatus, setNewStatus ] = useState('pendente');

  const providerValue = {
    userData,
    setUserData,
    tasks,
    setTasks,
    newTask,
    setNewTask,
    isSaving,
    setIsSaving,
    taskInEdition,
    setTaskInEdition,
    modalEdit,
    setModalEdit,
    newStatus,
    setNewStatus,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node ]).isRequired,
};

export default Provider;
