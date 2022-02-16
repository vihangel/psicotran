import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import React from "react";

import {
  FaUserSlash,
  FaCashRegister,
  FaUser,
  FaClipboardList,
  FaPencilAlt,
  FaPause,
  FaPlay,
  FaCheck,
  FaRedoAlt,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

function logout() {
  window.localStorage.removeItem('token');
  console.log("aqui");
}

const Sidebar = () => {
  
  return (
    <ProSidebar>
      <SidebarHeader>
        <img src={logo} alt="logo" />
        <h1>Psicotran</h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">
          <MenuItem icon={<FaUser />}>
            Candidatos <Link to="/" />
          </MenuItem>
          <SubMenu title="Avaliação" icon={<FaPencilAlt />}>
            <MenuItem icon={<FaPause />}>
              Pendentes
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaPlay />}>
              Em avaliação
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaCheck />}>
              Avaliados
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaRedoAlt />}>
              Resteste
              <Link to="/" />
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<FaCashRegister />}>
            Caixa
            <Link to="/caixa" />
          </MenuItem>
          <MenuItem icon={<FaClipboardList />}>
            Relatorios <Link to="/relatorios" />
          </MenuItem>
          <MenuItem icon={<FaUserSlash />}>
              Sair
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <h4>todos os direitos reservados @psicotran</h4>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
