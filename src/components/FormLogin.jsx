import React, { useState } from 'react';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/components/formLogin.css';
import api from '../api/api';

function FormLogin() {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ response, setResponse ] = useState({});

  const history = useHistory();

  const handleNewUser = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      setResponse(await api.post('/user/new', userData));
      console.log(response);

      if (response.status === 200) {
        history.push('/tasks');
      }

    } catch (error) {
      alert(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      setResponse(await api.post('/user/login', userData));
      console.log(response);

      if (response.status === 200) {
        history.push('/tasks');
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="form-login">
      <Tabs defaultActiveKey="login" id="tab" className="mb-3">
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