import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <div style={{ float: "left", color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
    E-Commerce
    </div>
    <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{ float: "right" }}
>
    <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Shop</Menu.Item>
        <Menu.Item key="3">Cart</Menu.Item>
        <Menu.Item key="4">Login</Menu.Item>
        </Menu>
        </Header>
);
};

export default AppHeader;
