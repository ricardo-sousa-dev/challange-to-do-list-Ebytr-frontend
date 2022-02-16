import { useContext } from 'react';
import Context from '../context/Context';
import api from '../api';

export async function getTasksUser() {
  const { userData } = useContext(Context);

  const data = await api.get('/tasks',
    { headers: { 'authorization': userData.data.token } })
    .then(res => res.data);

  return data;
}