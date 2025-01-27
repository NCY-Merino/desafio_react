import React, { useState } from 'react'

const PasswordErrorMessage = () => {
  return (
    <p className="error-message">La contraseña debe ser mayor a 6 caracteres</p>
  );
};
const PasswordEqualErrorMessage = () => {
  return (
    <p className="error-message">El campo confirmar contraseña debe ser igual al campo confirmar contraseña </p>
  );
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [rePassword, setRePassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return (
      validateEmail(email) &&
      password.value.length >= 6 &&
      rePassword.value.length >= 6 &&
      password.value === rePassword.value
    )
  };


  const clearForm = () => {
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRePassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada!");
    clearForm();
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="title-page mb-5">Registrar</h2>

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
              required />

            {password.isTouched && password.value.length < 6 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <div className="col-12 mb-3">
            <label for="password-confirm" className="form-label">Confirmar contraseña <sup>*</sup></label>
            <input type="password" id="password-confirm" className="form-control"
              value={rePassword.value}
              onChange={(e) => {
                setRePassword({ ...rePassword, value: e.target.value });
              }}
              onBlur={() => {
                setRePassword({ ...rePassword, isTouched: true });
              }}
              required />

            {rePassword.isTouched && rePassword.value.length < 6 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          {
            password.isTouched &&
              rePassword.isTouched &&
              rePassword.value !== password.value ? (
              <PasswordEqualErrorMessage />
            ) : null
          }

          <button type="button" className="btn btn-dark btn-sm">Enviar</button>

        </form>
      </div>
    </>
  )
}

/* disabled={!getIsFormValid()} */
export default RegisterPage