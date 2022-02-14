import api from '../api';

const createUser = async (userData) => {
  try {
    const userId = await api.post('/user', userData);

    return userId;

  } catch (err) {
    alert(err);
  }
};

const loginUser = async (userData) => {
  try {
    const user = await api.post('/login', userData);

    return user;

  } catch (err) {
    alert(err);
  }
};

export { createUser, loginUser};
