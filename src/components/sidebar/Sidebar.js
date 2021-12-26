import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import React from "react";

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

import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <img src={logo} alt="logo" />
        <h1>Psicotran</h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">
          <MenuItem icon={<FaUser />}>Candidatos</MenuItem>
          <SubMenu title="Avaliação" icon={<FaPencilAlt />}>
            <MenuItem icon={<FaPause />}>Pendentes</MenuItem>
            <MenuItem icon={<FaPlay />}>Em avaliação</MenuItem>
            <MenuItem icon={<FaCheck />}> Avaliados</MenuItem>
            <MenuItem icon={<FaRedoAlt />}>Resteste</MenuItem>
          </SubMenu>

          <MenuItem icon={<FaCashRegister />}>Caixa</MenuItem>
          <MenuItem icon={<FaClipboardList />}>Relatorios</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <h4>todos os direitos reservados @psicotran</h4>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
