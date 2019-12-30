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
import RestClient from '../network/restClient';
import ReactHtmlParser from 'react-html-parser';

const { TabPane } = Tabs;

class Template extends Component {

  constructor(props){
    super(props);
    this.state = {
      proyecto: undefined,
      galerias: []
    }
  }
  callback=(key)=>{
    console.log(key);
  }
  componentDidMount(){
    RestClient.getGalerias().then(response=>{
      this.setState({galerias:response.galerias});
    }).catch(error=>{
      console.log(error);
    })
    console.log(this.props)
    RestClient.getProyecto(this.props.match.params.id_proyecto).then(response=>{
      this.setState({proyecto:response.proyecto});
    }).catch(error=>{
      console.log(error);
    })
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
              {this.state.proyecto && this.state.proyecto.tabs.length>0 &&
              this.state.proyecto.tabs.map(table=>
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab={table.tab} key={table.id_proyecto_tab}>
             <div>{ReactHtmlParser (table.html)}</div>
                <div className="content1-read">
                    <p>LEER MÁS  <Icon type="plus" /></p>
                  </div>
                </TabPane>
              </Tabs>
            )
          }
              </div>
            </div>

            <div className="content1-dataSheet">
              <div className="contentMap"><img className="" src={mapa}></img></div>
              <p className="contentData">FICHA TÉCNICA</p>
              {this.state.proyecto && this.state.proyecto.ficha.length>0 &&
                this.state.proyecto.ficha.map(lista=>
                <div className="dataSheet-content">
                <h5><img className="liston" src={liston}></img>{lista.titulo}</h5>
                <p>{lista.texto}</p>
              </div>
            )
          }
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
         <Row type="flex" justify="start">
         {this.state.galerias.length>0 &&
           this.state.galerias.map((gale,index)=>
             <Col md={6} xs={12}>
              <div className="galeriaProyectoImg"><img src={gale.img}/></div>
             </Col>
          )
        }
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
