import React, { useState, useContext} from 'react'
import { validateEmail } from "./Register.jsx";
import { TokenContext } from '../context/Context.jsx';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  const { login } = useContext(TokenContext);
  const navigate = useNavigate();

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      const success = await login(email, password);
      console.log('SUCCES', success)
      if (success) {
        navigate('/profile');
        console.log("Authentication successful!");
        setMessage("");
      } else {
        setMessage('Credenciales incorrectas.');
      }
    } catch (error) {
      setMessage('Error al iniciar sesión. Intenta de nuevo.');
    }
  };

  const getIsFormValid = () => {
    return (
      validateEmail(email) &&
      password.value.length >= 6
    )
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="title-page mb-5">Login</h2>
        <form className="col-11 col-md-6 mx-auto" onSubmit={handleSubmit}>

          <div className="col-12 mb-3">
            <label for="email" className="form-label">Email <sup>*</sup></label>
            <input type="email" className="form-control" id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="name@email.com" required />
          </div>

          <div className="col-12 mb-3">
            <label for="password" className="form-label">Contraseña <sup>*</sup></label>
            <input type="password" id="password" className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Ingresa tu contraseña"
              required />
          </div>

          <button type="submit" className="btn btn-dark btn-sm">Login</button>
          <br/>
          { message !== '' ? 
            <p className="error-message">{message}</p>
            : null  
          } 
          

        </form>
      </div>
    </>
  )
}

/* disabled={!getIsFormValid()} */

export default LoginPage