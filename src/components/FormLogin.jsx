import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/components/formLogin.css';
import api from '../api';


function FormLogin() {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ newUserOk, setNewUserOk ] = useState(false);

  const { setUserData } = useContext(Context);

  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      await api.post('/user', userData);
      setNewUserOk(true);

    } catch (err) {
      alert(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      setUserData(await api.post('/login', userData));
      navigate('/tasks');

    } catch (err) {
      alert(err);
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
      {newUserOk ? <div className="alert-newUser">Usuário cadastrado com sucesso!</div> : null}
    </div>
  );
}

export default FormLogin;