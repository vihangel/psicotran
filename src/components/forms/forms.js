//import "./Sidebar.css";
import axios from "axios";
import React, { useState } from "react";
import "./form.css";

//import api from "./services/api";

//api.defaults.headers.authorization = `Bearer ${token}`;
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};
const Forms = () => {
  // const token = getToken();
  
  const token =  getToken();
  console.log("Token "+token);
  const [cpf, setCpf] = useState();
  const [renach, setRenach] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await addUser({
      cpf,
      renach,
    } , token);
  console.log(response)
  }

  return (
    <div className="form-background">
      <div className="background">
        <h2>Cadastrar Usuario</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div>
            <label>CPF: </label>
            <input type="cpf" onChange={(e) => setCpf(e.target.value)}/>
          </div>
          <div>
            <label>Renach: </label>
            <input type="renach" onChange={(e) => setRenach(e.target.value)}/>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

async function addUser(credentials, token) {
  return fetch("http://18.228.196.210:3333/user", {
    method: "POST",
    
    headers: {
      'Authorization': 'Bearer ' + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default Forms;
