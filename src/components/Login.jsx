import React, { useState } from 'react'
import { validateEmail } from "./Register.jsx";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const clearForm = () => {
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Authentication successful!");
    clearForm();
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
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Ingresa tu contraseña"
              required />
          </div>

          <button type="submit" className="btn btn-dark btn-sm">Login</button>

        </form>
      </div>
    </>
  )
}

/* disabled={!getIsFormValid()} */

export default LoginPage