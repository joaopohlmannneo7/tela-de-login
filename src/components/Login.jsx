import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o Link

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
`;

const LoginButton = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const RegisterButton = styled(Link)` // Altere para usar o Link em vez do button
  display: inline-block;
  padding: 10px;
  width: 100px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
   
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginInput
        type="user"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        Mantenha-me conectado
      </label>
      <LoginButton onClick={handleLogin}>Entrar</LoginButton>
      <RegisterButton to="/register">Cadastro</RegisterButton> 
    </LoginContainer>
  );
};

export default Login;
