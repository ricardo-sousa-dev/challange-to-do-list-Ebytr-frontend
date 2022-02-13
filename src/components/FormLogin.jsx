import React from 'react';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/components/formLogin.css';

function FormLogin() {
  return (
    <div className="form-login">
      <Tabs defaultActiveKey="login" id="tab" className="mb-3">
        <Tab eventKey="login" title="Login">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="register" title="Cadastro">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Insira seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" />
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