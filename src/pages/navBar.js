import React, { Component } from "react";
import {  Link} from "react-router-dom";
import "./index.css";
import logo from '../images/logo_ggs.jpg';
import { Icon, Row, Menu } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;

class NavBar extends Component {

  handleClick=(e)=>{
  console.log('click', e);
  }

  render() {
    return (
      <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <Row type="flex" justify="center" className="rowMenu">
          <nav className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
            <Link to="/"><img className="navbar-brand" src={logo} id="logo_custom" width="10%"  alt="logo"></img></Link>
            <div className="optionalMenu">
              <Menu onClick={this.handleClick} style={{ width: 56, height:46 }} mode="vertical">
                <SubMenu key="sub1" title={<span><Icon type="menu" /></span> }>
                  <Menu.ItemGroup title="Menú">
                    <Menu.Item key="1"><Link to="/proyectos"><Icon type="plus"  className="icon"/> Proyectos</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/oficina"><Icon type="plus"  className="icon"/> Oficina</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/contacto"><Icon type="plus"  className="icon"/> Contacto</Link></Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </div>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <Link className="nav-link" to="/proyectos"><b><Icon type="plus"  className="icon"/> Proyectos</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./oficina"><b><Icon type="plus"  className="icon"/> Oficina</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./contacto"><b>< Icon type="plus"  className="icon"/> Contacto</b></Link>
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
