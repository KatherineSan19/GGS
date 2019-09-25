import React, { Component } from "react";
import "./index.css";
import logo from '../images/logo_ggs.jpg';
import { Icon, Row, Col, Menu } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;

class NavBar extends Component {
  render() {
    return (
      <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <Row type="flex" justify="center" className="rowMenu">
          <nav className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
            <img className="navbar-brand" src={logo} id="logo_custom" width="10%"  alt="logo"></img>
            <div className="optionalMenu">
              <Menu onClick={this.handleClick} style={{ width: 56, height:46 }} mode="vertical">
                <SubMenu key="sub1" title={<span><Icon type="menu" /></span> }>
                  <Menu.ItemGroup title="Menú">
                    <Menu.Item key="1"><a href="./proyecto_general"><Icon type="plus"  className="icon"/> Proyectos</a></Menu.Item>
                    <Menu.Item key="1"><a href="./oficina"><Icon type="plus"  className="icon"/> Oficina</a></Menu.Item>
                    <Menu.Item key="1"><a href="./contacto"><Icon type="plus"  className="icon"/> Contacto</a></Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </div>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="./proyecto_general"><b><Icon type="plus"  className="icon"/> Proyectos</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./oficina"><b><Icon type="plus"  className="icon"/> Oficina</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./contacto"><b>< Icon type="plus"  className="icon"/> Contacto</b></a>
                </li>
              </ul>
            </div>
          </nav>
        </Row>
      </div>
    );
  }
}

export default NavBar;
