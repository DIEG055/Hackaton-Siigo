import React from "react";
import { Layout, Menu,Icon, } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const { Header, Footer } = Layout;
const { SubMenu } = Menu;
const Common = props => {
  
  const tenant = useSelector(state=>state.user.user);
  const user = null;
  
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
          <Menu.Item key="1">
            <Link to="/home"><Icon type="search" />Buscar</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/invoices"><Icon type="file" />Facturas</Link>
          </Menu.Item>
          {tenant && ( <Menu.Item key="3"> <Link to="/products"><Icon type="profile" />Productos</Link></Menu.Item>)}
          {user && <Menu.Item key="4"> <Link to="/cart"><Icon type="shopping-cart" />Carrito</Link></Menu.Item>}
          <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Usuario</span>
                </span>
              }
            >
              
              <Menu.Item key="5">Editar</Menu.Item>
              <Menu.Item key="6"><Link to="/signin">Cerrar Sesión  </Link></Menu.Item>
            

            </SubMenu>
        </Menu>
      </Header>
      {props.children}
      <Footer style={{ textAlign: "center" }}>
        Hackathon Siigo 2020 
      </Footer>
    </Layout>
  );
};

export default Common;
