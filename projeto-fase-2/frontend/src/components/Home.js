import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bem-vindo ao Mercado de Frutas Online!</h2>
      <p>Explore nossa variedade de frutas frescas e deliciosas. Encontre as melhores opções para uma alimentação saudável e saborosa.</p>
      <div className="features">
        <div className="feature">
          <h3>Variedade de Frutas</h3>
          <p>Descubra uma ampla seleção de frutas frescas, desde clássicos até exóticos.</p>
        </div>
        <div className="feature">
          <h3>Preços Competitivos</h3>
          <p>Veja os preços de cada fruta para fazer escolhas conscientes de compra.</p>
        </div>
        <div className="feature">
          <h3>Navegação Simples</h3>
          <p>Explore as frutas individualmente ou veja todas de uma vez para uma experiência conveniente.</p>
        </div>
      </div>
      <Link to="/login" className="login-link">Ir para o Login</Link>
    </div>
  );
};

export default Home;
