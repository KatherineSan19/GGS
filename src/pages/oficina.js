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
import imgFloat from '../images/oficina_float.jpg'
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
        <Row className="titleFloat ">
          <div className="subtitle2">
            <h4 className="mainText1">Enfoque</h4>
          </div>
          <div className="subtitle2 titleFloat2">
            <p className="mainText2" style={{ color: 'black' }}>Valores</p>
          </div>
          <div className="oficinaImg">
            <img src={imgFloat}></img>
            <div className="parrafosFloat">
              <p><b>GG+S arquitectos</b> somos una firma de diseño y planificación que busca armonizar los asentamietos humanos con los sistemas naturales.
              </p>
            </div>
            <div className="parrafosFloat2">
              <p className="parrafo1">01</p>
              <p className="parrafo2">SOSTENIBILIDAD</p>
              <p className="parrafo3">laoreet. psum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="parrafosFloat3">
              <p className="parrafo1">02</p>
              <p className="parrafo2">SOSTENIBILIDAD</p>
              <p className="parrafo3">laoreet. psum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="parrafosFloat4">
              <p className="parrafo1">03</p>
              <p className="parrafo2">SOSTENIBILIDAD</p>
              <p className="parrafo3">laoreet. psum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
          </div>
        </Row>
        <Row>
        <div className="subtitle2" style={{margin:'0px', padding:'0px' }}>
          <h4 className="mainText1">El equipo</h4>
        </div>
        <div className="subtitle2" style={{margin:'0px', padding:'0px' }}>
          <p className="mainText2" style={{margin:'0px', padding:'0px' }}>CO-FUNDADORES</p>
        </div>
        </Row>
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
        <div style={{padding: '0px', margin: '0px', width:'99.4%' }}>
        <Row gutter={16}>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <div className="category">
                <img src={categoria1}></img>
                <p className="textCategoryVertival">CATEGORIA 1</p>
                <div className="textCategory">
                  <p className="textCategoryP">Manta, 2018</p>
                  <p><b>Planificación de la diversificación turística</b></p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <div className="category">
                <img src={categoria2}></img>
                <p className="textCategoryVertival">CATEGORIA 1</p>
                <div className="textCategory">
                  <p className="textCategoryP">Manta, 2018</p>
                  <p><b>Planificación de la diversificación turística</b></p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <div className="category">
                <img src={categoria3}></img>
                <p className="textCategoryVertival">CATEGORIA 1</p>
                <div className="textCategory">
                  <p className="textCategoryP">Manta, 2018</p>
                  <p><b>Planificación de la diversificación turística</b></p>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <div className="category">
                <img src={categoria4}></img>
                <p className="textCategoryVertival">CATEGORIA 1</p>
                <div className="textCategory">
                  <p className="textCategoryP">Manta, 2018</p>
                  <p><b>Planificación de la diversificación turística</b></p>
                </div>
              </div>
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
