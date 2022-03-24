import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../images/btc.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">BitPush</Link>
        </Typography.Title>
        <Button className="menu-control-container"></Button>
      </div>
    </div>
  );
};

export default Navbar;
