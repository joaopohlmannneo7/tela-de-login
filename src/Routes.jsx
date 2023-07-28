
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} exact />

        {/* Rota de Cadastro */}
        <Route path="/register" element={<Register />} />

        {/* Rota padrão - Redireciona para a rota de Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Rotas;