import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.css";



const Login = ({ setToken }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      name,
      password
    });
    setToken(token);
  }
  return (
    <div className="login-background">
      <div className="background">
        <h2>Fazer login</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Usuario </label>
            <input type="name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Senha </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

async function loginUser(credentials) {
  return fetch("http://18.228.196.210:3333/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default Login;
