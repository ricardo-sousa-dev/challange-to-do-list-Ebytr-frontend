import React from 'react';
// import { useHistory } from 'react-router-dom';
import '../css/pages/login.css';
import Form from '../components/FormLogin';
import Logo from '../images/ebytr.jpeg';

function Login() {
  return (
    <div className="login-page">
      <img src={Logo} alt="logo" className="logo-login" />
      <Form />
    </div>
  );
}
export default Login;
