import React, { Component } from "react";
import "./index.css";
import { Icon, Tabs, Form, Input, Modal,Card, Button, Label,Alert,message,Select,Checkbox,DatePicker, Row, Col } from 'antd';
import oficina from '../images/oficina.jpg';
import gustavo from '../images/gustavo.jpg';
import agustina from '../images/agustina.jpg';
import diego from '../images/diego.jpg';
import logo from '../images/logo1.jpg';
import 'antd/dist/antd.css';
const { Meta } = Card;
class Oficina extends Component{
  render() {
    return (
      <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <Row type="flex" justify="center" className="rowMenu">
          <nav className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
            <img className="navbar-brand" src={logo} id="logo_custom" width="10%"  alt="logo"></img>
            <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="#offer"><b><Icon type="plus"  className="icon"/> Proyectos</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><b><Icon type="plus"  className="icon"/> Oficina</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><b>< Icon type="plus"  className="icon"/> Contacto</b></a>
                </li>
              </ul>
            </div>
          </nav>
        </Row>
        <Row>
          <div className="mainPicture">
            <img src={oficina}></img>
          </div>
          <h3 className="mainText1">Bienvenidos</h3>
          <p className="mainText2">SOBRE NOSOTROS</p>
          <div className="mainText3">
            <p>Somos una firma de diseño y planificación que busca armonizar los asentamietos humanos con los sistemas naturales.</p>
          </div>
        </Row>
        <Row gutter={16}>
        <div className="cardsOficina">
            <Col span={8}>
              <Card
                style={{ width: 300 }}
                cover={<img src={gustavo}/>}>
                <h4>GUSTAVO</h4>
                <h3>Gonzáles</h3>
                <p className="mail"><b>ggonzález@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Paisaje y Plani cación Ambiental</p>
                <p className="detail small">Realizó estudios de maestría en Arquitectura del Paisaje y Planificación Ambiental en la Universidad Berkeley.</p>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{ width: 300 }}
                cover={<img className="pictureDetail" src={agustina}/>}>
                <h4>AGUSTINA</h4>
                <h3>Santana</h3>
                <p><b>asantana@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Arquitectura y Diseño Urbano</p>
                <p className="detail small">Realizó  estudios de maestria en Arquitectura y Diseño Urbano en la Universidad de Columbia, Nueva York.</p>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{ width: 300 }}
                cover={<img src={diego}/>}>
                <h4>DIEGO</h4>
                <h3>Solano</h3>
                <p><b>darleada@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Paisaje y Plani cación Ambiental</p>
                <p className="detail small">Obtuvo su título de Arquitectura en la Universidad Católica de Guayaquil. Realizó  estudio  de maestría (...)</p>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}
export default Oficina;
