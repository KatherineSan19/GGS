import React, {Component} from "react";
import "./index.css";
import { Icon,Card, Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import contacto from "../images/contacto.png";
import mapa from "../images/contactoMapa.jpg";
import flecha from "../images/flechaContacto.png";
import categoria1 from '../images/categoria11.jpg'
import categoria2 from '../images/categoria2.jpg'
import categoria3 from '../images/categoria3.jpg'
import categoria4 from '../images/categoria4.jpg'

class Contacto extends Component{

  render(){
    return(
      <div className="contacto">
        <div className="contactoImg">
          <img src={contacto}>
          </img>
        </div>
        <div className="contactoLocation">
          <div className="contactoMap">
            <img src={mapa}>
            </img>
            <div className="contactoPortoviejo">
              <h3>PORTOVIEJO</h3>
              <p>Edificio Bupa, Oficina 401 </p>
              <p>Cdla. Universitaria Av. U2 y Calle 10 </p>
              <p><b>Manta, Ecuador</b></p>
              <p className="contactoP">
                admin@ggsarquitectos.com
              </p>
              <p>Tel. (+593) 35 35 36 31</p>
            </div>
          </div>
        </div>
        <div className="contactoPanelMail">
          <div className="contactoMail">
            <div className="contactoEmail">
              <p>Enter your mail</p>
              <Input style={{ width: '94%' }}
              placeholder="Únete"/>
              <img style={{ width: '6%' }} src={flecha}>
              </img>
            </div>
            <div className="contactoMsj">
            ¿Quiéres formar parte de nuestro equipo de colaboradores?
            </div>
          </div>
        </div>
        <div className="subtitle2">
          <h2 className="mainText1">Algunos Proyectos</h2>
        </div>
        <div style={{padding: '0px', margin: '0px', width:'99%' }}>
        <Row>
          <Col span={6}>
            <Card bordered={false}>
              <img className="category" src={categoria1}></img>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
              <img className="category" src={categoria2}></img>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
              <img className="category" src={categoria3}></img>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false}>
              <img className="category" src={categoria4}></img>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}
export default Contacto ;
