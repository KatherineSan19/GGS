import React, {Component} from "react";
import { BrowserRouter } from "react-router-dom";
import {  BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./index.css";
import { Icon, Tabs, Card, Row, Col, Menu } from 'antd';
import 'antd/dist/antd.css';
import logo from '../images/logo_ggs.jpg';
import Home from "./Home";
import Template from "./proyecto_template";
import Oficina from "./oficina";
import Contacto from "./contacto";
const { SubMenu } = Menu;
class Main extends Component {
  render(){
    return(
      <BrowserRouter>
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
                    <Menu.Item key="1"><Link to="./proyecto_general"><Icon type="plus"  className="icon"/> Proyectos</Link></Menu.Item>
                    <Menu.Item key="1"><Link to="./oficina"><Icon type="plus"  className="icon"/> Oficina</Link></Menu.Item>
                    <Menu.Item key="1"><Link to="./contacto"><Icon type="plus"  className="icon"/> Contacto</Link></Menu.Item>
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
          <Switch>
            <Route exact path="/" component={Template} />
            <Route exact path="/oficina" component={Oficina} />
            <Route exact path="/contacto" component={Contacto} />
          </Switch>
        </Row>
      </BrowserRouter>
    );
  }
}

export default Main;
