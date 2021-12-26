import React from "react";
import "./home.css";

import { Link } from "react-router-dom";

import {
  FaCashRegister,
  FaPause,
  FaPlay,
  FaCheck,
  FaRedoAlt,
  FaPrint,
  FaDownload,
} from "react-icons/fa";

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

const Table = () => {
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

export default Table;
