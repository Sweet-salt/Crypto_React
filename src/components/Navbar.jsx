import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeFilled,
  MoneyCollectOutlined,
  ThunderboltFilled,
  DollarCircleOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../images/btc.svg";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 100%;
`;
const Navbar = () => {
  return (
    <Menu theme="light">
      <Container>
        <Flex>
          <Menu.Item icon={<HomeFilled />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<DollarCircleOutlined />}>
            <Link to="/currentprice">price</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<ThunderboltFilled />}>
            <Link to="/news">NEWS</Link>
          </Menu.Item>
        </Flex>
      </Container>
    </Menu>
  );
};

export default Navbar;
