import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext, TokenContext } from "../components/context/Context"; // Importación corregida

const Navbar = () => {
  // Acceder correctamente al contexto
  const { totalContext } = useContext(CartContext);
  const { token, setTokenContext } = useContext(TokenContext); // ✅ Corrección aquí

  const total = new Intl.NumberFormat('es-CL').format(totalContext);

  const handleLogin = () => {
    setTokenContext(!token);
    console.log(token ? 'User logged out' : 'User logged in');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="btn btn-outline-light btn-sm me-md-2" to="/">🍕 Home</Link>
          <Link className="btn btn-outline-light btn-sm me-md-2" to="/login">
            {!token ? '🔐 Login' : '🔓 Logout'}
          </Link>
          {!token ?
            <Link className="btn btn-outline-light btn-sm me-md-2" to="/register">🔐 Register</Link>
            :
            <Link className="btn btn-outline-light btn-sm me-md-2" to="/profile">🔒 Profile</Link>
          }
        </div>
        <div className="position-absolute top-25 end-0 pe-2">
          <Link className="btn cart-btn btn-outline-info btn-sm me-2" to="/cart">🛒 ${total}</Link>
          <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
