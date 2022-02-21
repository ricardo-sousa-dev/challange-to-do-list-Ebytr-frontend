import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ tasks, setTasks ] = useState([]);
  const [ taskInEdition, setTaskInEdition ] = useState({});
  const [ modalEdit, setModalEdit ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ newStatus, setNewStatus ] = useState('pendente');
  const [ isSaved, setIsSaved ] = useState(false);
  const [ isSaving, setIsSaving ] = useState(false);


  const providerValue = {
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
    isSaved,
    setIsSaved
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
