//import "./Sidebar.css";
import axios from "axios";
import React from "react";
import "./form.css";

//import api from "./services/api";

//api.defaults.headers.authorization = `Bearer ${token}`;

const Forms = () => {
  return (
    <div className="form-background">
      <div className="background">
        <h2>Cadastrar Usuario</h2>
        <hr></hr>
        <form>
          <div>
            <label>CPF: </label>
            <input label="cpf" />
          </div>
          <div>
            <label>Renach: </label>
            <input label="renach" />
          </div>
          <input className="enviar" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Forms;
