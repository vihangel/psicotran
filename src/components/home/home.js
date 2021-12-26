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

// {Builds the HTML Table out of myList.
// function buildHtmlTable(selector) {
//   var columns = addAllColumnHeaders(myList, selector);

//   for (var i = 0; i < myList.length; i++) {
//     var row = "<tr />";
//     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
//       var cellValue = myList[i][columns[colIndex]];
//       if (cellValue == null) cellValue = "";
//       row.append($("<td/>").html(cellValue));
//     }
//     (selector).append(row);
//   }
// }

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
// function addAllColumnHeaders(myList, selector) {
//   var columnSet = [];
//   var headerTr = "<tr/>";

//   for (var i = 0; i < myList.length; i++) {
//     var rowHash = myList[i];
//     for (var key in rowHash) {
//       if ($.inArray(key, columnSet) == -1) {
//         columnSet.push(key);
//         headerTr.append("<th/>").html(key);
//       }
//     }
//   }
//   selector.append(headerTr);

//   return columnSet;
// }}

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
            <a href="/">
              Pendente
              <FaPause />
            </a>
          </td>
          <td>
            <a href="/">
              Pagar <FaCashRegister />
            </a>
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>041.579.081-63</td>
          <td>Liberdade</td>
          <td>
            <a href="/">
              Resteste <FaRedoAlt />
            </a>
          </td>
          <td>Pago</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
