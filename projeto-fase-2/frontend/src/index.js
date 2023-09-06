import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Fruits from './components/Fruits';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [authenticated, setAuthenticated] = useState(false); // Estado de autenticação

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated}/>} // Passa a função para o Login
          />
          <Route
            path="/fruits"
            element={<Fruits authenticated={authenticated} />} // Passa o estado de autenticação para o Fruits
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
