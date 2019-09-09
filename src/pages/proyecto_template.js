import React, { Component } from "react";
import "./index.css";
import { Icon, Tabs, Form, Input, Modal,Card, Button, Label,Alert,message,Select,Checkbox,DatePicker, Row, Col } from 'antd';
import principal from '../images/principal.jpg';
import mapa from '../images/mapa.jpg';
import carretera from '../images/carretera.png';
import logo from '../images/logo1.jpg';
import arbol1 from '../images/arbol1.jpg';
import arbol2 from '../images/arbol2.jpg';
import centro from '../images/centro.jpg';
import galeria1 from '../images/galeria1.jpg';
import galeria2 from '../images/galeria2.jpg';
import galeria3 from '../images/galeria3.jpg';
import galeria4 from '../images/galeria4.jpg';
import galeria5 from '../images/galeria5.jpg';
import galeria6 from '../images/galeria6.jpg';
import galeria8 from '../images/galeria8.jpg';
import galeria9 from '../images/galeria9.jpg';
import proyecto1 from '../images/proyecto1.jpg';
import proyecto2 from '../images/proyecto2.jpg';
import proyecto3 from '../images/proyecto3.jpg';
import proyecto4 from '../images/proyecto4.jpg';
import linea from '../images/linea.jpg';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;


class Template extends Component {


  callback=(key)=>{
    console.log(key);
  }

  render() {
    return (
      <div className="">
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
          <div className="proyectotemplateImage">
          </div>
        </Row>
        <Row>
          <div className="content1-proyectotemplate">
            <div className="content1-planning">
              <p className="content1-date">Published July 2019</p>
              <h3 className="content1-title">
                Planificación de la Diversificación Turística
              </h3>
              <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                  <TabPane tab="Latitud 0" key="1">
                    <p className="content1-text">La propuesta est  orientada a elevar el nivel jer rquico de atractivos tur sticos destacados, a partir del entendimiento de sus potencialidades tales como biodiversidad, riqueza arqueol gica, hist rico y paisajes. Se escogieron tres sitios que representan la gran diversidad de recursos tur sticos que tiene la provincia.</p>
                    <h4 className="content1-subtitle">Latitud 0</h4>
                    <p className="content1-text">En el norte, una celebración al trabajo de la misión geod sica, enviada por la Real Academia Francesa de la Ciencia para comprobar la forma de la tierra con mediciones sobre la línea ecuatorial, lo que dió  origen al nombre Ecuador. </p>
                    <img className="img1" src={carretera}></img>
                    <h4 className="content1-subtitle">El Humedal La Segua</h4>
                    <p className="content1-text">En el centro, un refugio de aves nativas y migratorias, donde est  representada aproximadamente el diez por ciento de la avifauna del Ecuador. Este sitio se halla en la zona de transici n entre el (...)</p>
                    <div className="content1-read">
                      <p>LEER MÁS  <Icon type="plus" /></p>
                    </div>
                  </TabPane>
                  <TabPane tab="El Humedal La Segua" key="2">

                  </TabPane>
                  <TabPane tab="isla de La Plata" key="3">

                  </TabPane>
                </Tabs>
              </div>

            </div>
            <div className="content1-dataSheet">
              <div className="contentMap"><img className="" src={mapa}></img></div>
              <p className="contentData">FICHA TÉCNICA</p>
              <div className="dataSheet-content">
                <h5>Tipo de Proyecto</h5>
                <p>Planificación Urbana</p>
              </div>
              <div className="dataSheet-content">
                <h5>Cliente</h5>
                <p>Ministerio de Turismo de Manabí</p>
              </div>
              <div className="dataSheet-content">
                <h5>Equipo</h5>
                <p>Ma. Agustina Santan  Gustavo Gonzále  Diego Solano</p>
              </div>
              <div className="dataSheet-content">
                <h5>Colaboradores</h5>
                <p>Ma. Agustina Santan  Gustavo Gonzále  Diego Solano</p>
              </div>
              <div className="dataSheet-content dataSheetH4">
                <p>SHARE THIS  <Icon type="facebook" />  <Icon type="instagram" />  <Icon type="twitter" /></p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="componentCenter">
            <div className="tree">
              <img  src={arbol1}></img>
              <h5>LOREM IPSUM</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="tree">
              <img  src={arbol2}></img>
              <h5>LOREM IPSUM</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="result">
            <div className="result1">
              <Col span={24}>
                <Card bordered={false}>
                  <img className="before" src={centro}></img>
                </Card>
              </Col>
            </div>
          </div>
        </Row>
        <Row>
          <div className="subtitle">
            RESULTADOS
          </div>
          <div className="subtitle2">
            Galería del Proyecto
          </div>
        </Row>
        <Row>
          <div className="galeria">
            <img src={galeria1}></img>
            <img src={galeria2}></img>
            <img src={galeria3}></img>
            <img src={galeria4}></img>
          </div>
          <div className="galeria2">
            <img className="galeriaImg" src={galeria5}></img>
            <div className="galeriaImg2">
              <div className="galeriaImg3">
                <img className="ImgGaleria6" src={galeria6}></img>
                <img className="ImgGaleria8" src={galeria8}></img>
              </div>
              <img className="" src={galeria9}></img>
            </div>
          </div>
        </Row>
        <Row>
          <div className="subtitle">
            PROYECTOS
          </div>
          <div className="subtitle2">
            También te podrían interesar
          </div>
        </Row>
        <Row>
          <div className="proyecto">
            <img src={proyecto1}></img>
            <img src={proyecto2}></img>
            <img src={proyecto3}></img>
            <img src={proyecto4}></img>
          </div>
        </Row>
        <Row>
          <div className="line">
            <img src={linea}></img>
          </div>
          <div className="footer">
            <p>This is a Website made by <b>Sundried</b></p>
            <p>© Copyright 2019 GG + S All Rights Reserved</p>
          </div>
      </Row>
      </div>
    );
  }
}
export default Template;
