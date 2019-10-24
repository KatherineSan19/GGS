import React, {Component} from "react";
import "./index.css";
import {Card, Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import contacto from "../images/contacto.png";
import mapa from "../images/contactoMapa.jpg";
import flecha from "../images/flechaContacto.png";
import categoria1 from '../images/categoria11.jpg'
import categoria2 from '../images/categoria2.jpg'
import categoria3 from '../images/categoria3.jpg'
import categoria4 from '../images/categoria4.jpg'
import Footer from "./footer";
import RestClient from '../network/restClient';

class Contacto extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contacto: undefined
    }
  }

  componentDidMount(){
    RestClient.getContacto().then(response=>{
      this.setState({contacto:response.contacto});
    }).catch(error=>{
      console.log(error);
    })
  }

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
            {this.state.contacto!=undefined &&
              <div className="contactoPortoviejo">
                <h3>{this.state.contacto.ubicacion}</h3>
                <p>{this.state.contacto.direccion}</p>
                <p><b>{this.state.contacto.ciudad}, {this.state.contacto.pais}</b></p>
                <p className="contactoP">
                  {this.state.contacto.correo}
                </p>
                <p>Tel. {this.state.contacto.telefono}</p>
              </div>
            }

          </div>
        </div>
        <div className="contactoPanelMail">
          <div className="contactoMail">
            <div className="contactoEmail">
              <p className="contactoInput">Enter your mail</p>
              <Input className="contactoInput" style={{ width: '94%' }}
              placeholder="Únete"/>
              <img style={{ width: '6%' }} src={flecha}>
              </img>
            </div>
            <div className="contactoMsj">
            ¿Quiéres formar parte de nuestro equipo de colaboradores?
            </div>
          </div>
        </div>
        <div className="contactoPanelMailNone">
          <div className="contactoMailNone">
            <div className="contactoEmailNone">
              <p className="contactoInputNone">Enter your mail</p>
              <Input className="contactoInput" style={{ width: '94%' }}
              placeholder="Únete"/>
              <img style={{ width: '6%' }} src={flecha}>
              </img>
            </div>
          </div>
          <div className="contactoMsjNone">
          ¿Quiéres formar parte de nuestro equipo de colaboradores?
          </div>
        </div>
        <div className="subtitle2">
          <h2 className="mainText1">Algunos Proyectos</h2>
        </div>
        <div style={{padding: '0px', margin: '0px', width:'99%' }}>
        <Row>
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
      <div style={{padding: '35px 0px 0px 0px' }}>
        <Footer/>
      </div>
      </div>
    );
  }
}
export default Contacto ;
