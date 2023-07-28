import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
`;

const RegisterButton = styled(Link)` 
  display: inline-block;
  padding: 10px;
  width: 100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none; 
  text-align: center;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    
  };

  return (
    <RegisterContainer>
      <h1>Cadastro </h1>
      <RegisterInput
        type="text"
        placeholder="Nome de Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <RegisterInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <RegisterInput
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <RegisterInput
        type="password"
        placeholder="Confirme a Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <RegisterButton to="/login">Entrar</RegisterButton> 
    </RegisterContainer>
  );
};

export default Register;
