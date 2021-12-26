//import "./Sidebar.css";
import React from "react";
import "./form.css";
import {
  FaCashRegister,
  FaUser,
  FaClipboardList,
  FaPencilAlt,
  FaPause,
  FaPlay,
  FaCheck,
  FaRedoAlt,
} from "react-icons/fa";

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
        <br></br>
      </div>
    </div>
  );
};

export default Forms;
