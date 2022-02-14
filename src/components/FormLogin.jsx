import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/components/formLogin.css';
import api from '../api';
import { createUser } from '../services';

function FormLogin() {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ setUser ] = useState('');

  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    await createUser(userData);
    // navigate('/tasks');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    setUser(await api.post('/login', userData));

    navigate('/tasks');
  };

  return (
    <div className="form-login">
      <Tabs defaultActiveKey="login" id="tabContainer" className="mb-3">
        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
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
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Insira seu nome" onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}

export default FormLogin;