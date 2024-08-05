import React from "react";
import { Menu } from "antd";
import MenuHeader from "./menuHeader";
import MenuList from "./menuList";
import "../../assets/styles/menuContainer.scss";
function IsMenu({ info }) {
  return (
    <div className="menu-container">
      <Menu>
        <MenuHeader info={info} />
        <MenuList />
      </Menu>
    </div>
  );
}

export default IsMenu;
