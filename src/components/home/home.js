import React from "react";
import "./home.css";

import { Link } from "react-router-dom";

import {
  FaCashRegister,
  FaPause,
  FaRedoAlt,
  FaPrint,
  FaDownload,
} from "react-icons/fa";
import axios from "axios";
//import {dados} from '../data'
const myList = [
  {
    name: "abc",
    CPF: "041.579.081-63",
    autoescola: "Liberdade",
    Situação: "Aprovado",
    Caixa: "Pago",
  },
];


// function getUser({ tok }) {
//   console.log("teste2: " + tok);
//   axios
//     .get(url + "/user", { headers: { Authorization: tok } })
//     .then((response) => {
//       // If request is good...
//       console.log("users " + response);
//     })
//     .catch((error) => {
//       console.log("erro " + error);
//     });
// }

function getToken()  {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}




const Table = () => {

  const token = getToken();
  console.log("Token " + token);

  const response =  getUser(token);
  var users;
  const printResponse = () => {
    response.then(({error, users}) => {
      console.log(users);
  
    });
  };

  printResponse();
  console.log(users);

  
  return (
    <div className="table-background">
      <div className="table-button">
        <button>
          <FaPrint /> Imprimir
        </button>
        <button>
          <FaDownload /> Baixar
        </button>
      </div>
      <table>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Autoescola</th>
          <th>Situação</th>
          <th>Caixa</th>
        </tr>

        <tr>
          <td>Alfreds Futterkiste</td>
          <td>041.579.081-63</td>
          <td>Liberdade</td>
          <td>Resteste</td>
          <td>Pago</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>041.579.081-63</td>
          <td>Liberdade</td>
          <td>
            <Link to="/forms">
              Pendente
              <FaPause />
            </Link>
          </td>
          <td>
            <Link to="/caixa">
              Pagar <FaCashRegister />
            </Link>
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>041.579.081-63</td>
          <td>Liberdade</td>
          <td>
            <Link to="/forms">
              Resteste <FaRedoAlt />
            </Link>
          </td>
          <td>Pago</td>
        </tr>
      </table>
    </div>
  );
};

async function getUser(token) {
  return fetch("http://18.228.196.210:3333/user", {
    method: "GET",

    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  
}

export default Table;
