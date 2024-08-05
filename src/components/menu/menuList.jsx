import React from "react";
import { Menu } from "antd";
import MenuItemComponent from "./menuItem";
import icon1 from "../../assets/images/acong.png";
import icon3 from "../../assets/images/group.png";
import icon4 from "../../assets/images/night.png";
import icon5 from "../../assets/images/profile.png";
import authAction from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const { logout } = authAction;
const MenuList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const menuItems = [
    {
      icon: icon1,
      text: "Nhắc đến bạn",
    },
    {
      icon: icon3,
      text: "Tạo nhóm",
    },
    {
      icon: icon4,
      text: "Giao diện tối",
    },
    {
      icon: icon5,
      text: "Đăng xuất",
      onClick: handleLogout,
    },
  ];
  return (
    <Menu>
      {menuItems.map((item, index) => (
        <Menu.Item key={index + 2}>
          <MenuItemComponent item={item} />
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuList;
