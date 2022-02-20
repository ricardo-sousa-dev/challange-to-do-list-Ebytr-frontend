import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/components/formLogin.css';
import api from '../api';

function FormLogin() {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ errorIncorrectUser, setErrorIncorrectUser ] = useState(false);
  const [ errorInvalidEntries, setErrorInvalidEntries ] = useState(false);

  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
      };

      await api.post('/user', userData);

      const user = await api.post('/login',
        { email: userData.email, password: userData.password })
        .then(res => res.data);

      localStorage.setItem('userData', JSON.stringify(user));

      navigate('/tasks');

    } catch (err) {
      if (err.response.data.message === 'Invalid entries. Try again.') {
        setErrorInvalidEntries(true);
        setTimeout(() => {
          setErrorInvalidEntries(false);
        }, 5000);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const user = await api.post('/login', userData).then(res => res.data);
      localStorage.setItem('userData', JSON.stringify(user));
      navigate('/tasks');

    } catch (err) {
      if (err.response.data.message === 'Incorrect username or password') {
        setErrorIncorrectUser(true);
        setTimeout(() => {
          setErrorIncorrectUser(false);
        }, 5000);
      }
    }
  };

  return (
    <div className="form-login">
      <Tabs defaultActiveKey="login" id="tabContainer" className="mb-3">
        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="loginUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginUserPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="register" title="Cadastro">
          <Form onSubmit={handleNewUser}>
            <Form.Group className="mb-3" controlId="createUserName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Insira seu nome" onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createUserEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="createUserPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Tab>
      </Tabs>
      {errorIncorrectUser ? <div className="error-incorrect-user">Usuário ou senha incorretos!</div> : null}
      {errorInvalidEntries ? <div className="error-invalid-entries">Dados inválidos! Tente novamente.</div> : null}
    </div>
  );
}

export default FormLogin;