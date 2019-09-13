import React, { Component } from "react";
import "./index.css";
import { Icon, Tabs, Form, Input,Card, Row, Col, Menu, Dropdown} from 'antd';
import oficina from '../images/oficina.jpg';
import gustavo from '../images/gustavo.jpg';
import agustina from '../images/agustina.jpg';
import diego from '../images/diego.jpg';
import logo from '../images/logo1.jpg';
import plus from '../images/mas.png';
import sentence from '../images/sentence.jpg'
import comillas from '../images/comillas.jpg'
import categoria1 from '../images/categoria11.jpg'
import categoria2 from '../images/categoria2.jpg'
import categoria3 from '../images/categoria3.jpg'
import categoria4 from '../images/categoria4.jpg'
import 'antd/dist/antd.css';
const { Meta } = Card;
const menu = (
  <Menu>
    <Menu.Item key="0">
  Hola
  </Menu.Item>
  </Menu>
);
class Oficina extends Component{
  render() {
    return (
      <div className="oficina">
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
        <div className="subtitle2">
          <h4 className="mainText1">El equipo</h4>
        </div>
        <div className="subtitle2">
          <p className="mainText2">CO-FUNDADORES</p>
        </div>
        <div className="elEquipo">
        <div className="cardsOficina" style={{ padding: '10px' }}>
          <Row gutter={16}>
            <Col md={8} xs={24} className="minCard">
              <Card bordered={false}
                style={{ width: '80%', margin:20 }}
                cover={<div className="divPictureDetail"><img className="pictureDetail" src={gustavo}/></div>}>
                <h4>GUSTAVO</h4>
                <h3>Gonzáles</h3>
                <p className="mail"><b>ggonzález@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Paisaje y Plani cación Ambiental</p>
                <p className="detail small">Realizó estudios de maestría en Arquitectura del Paisaje y Planificación Ambiental en la Universidad Berkeley.</p>
                <div className="plusDiv"><img className="plus" src={plus}></img>
                </div>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
            <Col md={8} xs={24} className="minCard">
              <Card bordered={false}
                style={{ width: '80%', margin:20 }}
                cover={<div className="divPictureDetail"><img className="pictureDetail" src={agustina}/></div>}>
                <h4>AGUSTINA</h4>
                <h3>Santana</h3>
                <p className="mail"><b>asantana@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Arquitectura y Diseño Urbano</p>
                <p className="detail small">Realizó  estudios de maestria en Arquitectura y Diseño Urbano en la Universidad de Columbia, Nueva York.</p>
                <div className="plusDiv"><img className="plus" src={plus}></img></div>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
            <Col md={8} xs={24} className="minCard">
              <Card bordered={false}
                style={{ width: '80%', margin:20 }}
                cover={<div className="divPictureDetail"><img className="pictureDetail" src={diego}/></div>}>
                <h4>DIEGO</h4>
                <h3>Solano</h3>
                <p className="mail"><b>darleada@ggsarquitectos.com</b></p>
                <p className="small studies">Máster en Paisaje y Plani cación Ambiental</p>
                <p className="detail small">Obtuvo su título de Arquitectura en la Universidad Católica de Guayaquil. Realizó  estudio  de maestría (...)</p>
                <div className="plusDiv">
                <img className="plus" src={plus}></img>
                </div>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
          </Row>
        </div>
        </div>
        <Row>
          <div className="sentence">
            <img className="comillas"src={comillas}></img>
            <p>la arquitectura solo se considera completa con la intervención del ser humano que la experimenta</p>
            <img className="sentenceImg" src={sentence}></img>
          </div>
        </Row>
        <div className="subtitle2">
          <h4 className="mainText1">Algunos Proyectos</h4>
        </div>
        <div style={{padding: '0px', margin: '0px' }}>
        <Row gutter={16}>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <img className="category" src={categoria1}></img>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <img className="category" src={categoria2}></img>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <img className="category" src={categoria3}></img>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <img className="category" src={categoria4}></img>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="footer" style={{ marginBottom: '10px', marginTop: '17px' }}>
        <p>This is a Website made by <b>Sundried</b></p>
        <p>© Copyright 2019 GG + S All Rights Reserved</p>
      </div>
      </div>
    );
  }
}
export default Oficina;
