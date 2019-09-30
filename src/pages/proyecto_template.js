import React, { Component } from "react";
import "./index.css";
import { Icon, Tabs, Card, Row, Col, Menu } from 'antd';
import principal from '../images/principal.jpg';
import mapa from '../images/mapa.jpg';
import carretera from '../images/carretera.png';
import logo from '../images/logo_ggs.jpg';
import arbol1 from '../images/arbol1.jpg';
import arbol2 from '../images/arbol2.jpg';
import antes from '../images/antes.jpg';
import despues from '../images/despues.jpg';
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
import linea from '../images/linea.jpg';
import liston from '../images/liston.jpg';
import Footer from "./footer";
import 'antd/dist/antd.css';

const { TabPane } = Tabs;


class Template extends Component {


  callback=(key)=>{
    console.log(key);
  }

  render() {
    return (
      <div className="">
        <Row>
          <div className="proyectotemplateImage">
            <img src={principal}></img>
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
                <h5><img className="liston" src={liston}></img>Tipo de Proyecto</h5>
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
              <p  className="before">ANTES</p>
              <Col span={12} className=" antes">
                <Card bordered={false}>
                  <img src={antes}></img>
                </Card>
              </Col>
              <Col span={12} className=" despues">
                <Card bordered={false}>
                  <img src={despues}></img>
                </Card>
              </Col>
              <p className="before">DESPUÉS</p>
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
        <div style={{ padding: '4% 3% 2% 2%' }}>
          <Row>
            <Col md={6} xs={12} className="proyectoCards">
              <Card bordered={false}>
                <div className="proyecto">
                  <img className="imgTemplate" src={proyecto1}></img>
                  <div className="textTemplate">
                    <p className="textTemplateP1">PLANIFICACIÓN</p>
                    <p className="textTemplateP2">Plan</p>
                    <p className="textTemplateP2">Maestro Urbano</p>
                    <p className="textTemplateP2">de Portoviejo</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={12} className="proyectoCards">
              <Card bordered={false}>
                <div className="proyecto">
                  <img className="imgTemplate" src={proyecto2}></img>
                  <div className="textTemplate">
                    <p className="textTemplateP1">PLANIFICACIÓN</p>
                    <p className="textTemplateP2">Plan</p>
                    <p className="textTemplateP2">Maestro Urbano</p>
                    <p className="textTemplateP2">de Portoviejo</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={12} className="proyectoCards">
              <Card bordered={false}>
                <div className="proyecto">
                  <img className="imgTemplate" src={proyecto1}></img>
                  <div className="textTemplate">
                    <p className="textTemplateP1">PLANIFICACIÓN</p>
                    <p className="textTemplateP2">Plan</p>
                    <p className="textTemplateP2">Maestro Urbano</p>
                    <p className="textTemplateP2">de Portoviejo</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6} xs={12} className="proyectoCards">
              <Card bordered={false}>
                <div className="proyecto">
                  <img className="imgTemplate" src={proyecto1}></img>
                  <div className="textTemplate">
                    <p className="textTemplateP1">PLANIFICACIÓN</p>
                    <p className="textTemplateP2">Plan</p>
                    <p className="textTemplateP2">Maestro Urbano</p>
                    <p className="textTemplateP2">de Portoviejo</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="line">
            <img src={linea}></img>
          </div>
          <Footer/>
      </Row>
      </div>
    );
  }
}
export default Template;
