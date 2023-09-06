import React, { useState } from 'react';
import './Login.css';
import './Fruits'; 
import { useNavigate } from 'react-router-dom';
import getAccessToken from '../function/oauthFront.js';
import config from '../function/configFront';

export default function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      handleLogin();
    } catch (error) {
      console.log('Falha no login');
    }
  };

  const handleLogin = async () => {
    if (username === config.username && password === config.password) {
      await getAccessToken(username, password);
      console.log('Login bem-sucedido');
      navigate('/fruits');
      setAuthenticated(true);
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <h2>Login de Usuário</h2>
            <label className="input-label">Nome de usuário</label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label className="input-label">Senha</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Entrar
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}
