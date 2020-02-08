import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = Layout;

const Common = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Empresa</Menu.Item>
          <Menu.Item key="2">Facturas</Menu.Item>
          <Menu.Item key="3">Carrito</Menu.Item>
        </Menu>
      </Header>
      {props.children}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Common;
