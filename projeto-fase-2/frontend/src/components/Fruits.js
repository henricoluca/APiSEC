import React, { useEffect, useState } from 'react';
import getFruits from '../function/frutasControllerFront';
import './Fruits.css';
import { useNavigate } from 'react-router-dom';

function Fruits({ authenticated }) {
  const [allFruits, setAllFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login');
    } else {
      async function fetchData() {
        const response = await fetch('http://localhost:4000/frutas', {
          headers: {
            authorization: token
          }
        });
        console.log(response);
        try {
          const data = await getFruits(token);
          setAllFruits(data.frutas);
          setFilteredFruits(data.frutas);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
  }, [authenticated, navigate, token]);

  useEffect(() => {
    const filtered = allFruits.filter(fruit =>
      fruit.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFruits(filtered);
  }, [searchTerm, allFruits]);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function EraseLocalStorage() {
    localStorage.removeItem('token');
    navigate('/');
  }

  function LogOut() {
    return (
      <button type="button" className="LogOut custom-logout-button" onClick={EraseLocalStorage}>
      Log Out
    </button>    
    );
  }

  return (
    <div className="home-container">
      <h1 className="home-header">Lista de Frutas</h1>
      <input
        type="text"
        placeholder="Pesquisar fruta por nome"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <FruitList fruits={filteredFruits} />
      <LogOut />
    </div>
  );
}

function FruitList({ fruits }) {
  return (
    <ul className="fruit-list">
      {fruits.map((fruit, index) => (
        <li key={index} className="fruit-list-item">
          <span className="fruit-name">{fruit.nome}</span>
          <span className="fruit-price">Preço: R${fruit.preco}</span>
        </li>
      ))}
    </ul>
  );
}

export default Fruits;
