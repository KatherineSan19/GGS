import React, { Component } from "react";
import "./index.css";
import { Card, Row, Col} from 'antd';
import oficina from '../images/oficina.jpg';
import gustavo from '../images/gustavo.jpg';
import agustina from '../images/agustina.jpg';
import diego from '../images/diego.jpg';
import plus from '../images/mas.png';
import sentence from '../images/sentence.jpg'
import comillas from '../images/comillas.jpg'
import categoria2 from '../images/categoria2.jpg';
import imgFloat from '../images/oficina_float.jpg'
import Footer from "./footer";
import 'antd/dist/antd.css';
import {  BrowserRouter as Router, Link} from "react-router-dom";
import RestClient from '../network/restClient';
const { Meta } = Card;

class Oficina extends Component{

  constructor(props){
    super(props);
    this.state={
      equipo: undefined
    }
    super(props);
    this.state={
      galeria: undefined
    }
  }

  componentDidMount(){
    RestClient.getEquipo().then(response=>{
      this.setState({equipo:response.equipo});
    }).catch(error=>{
      console.log(error);
    })

    RestClient.getMasProyectos({size:4}).then(response=>{
      this.setState({galeria:response.galeria});
    }).catch(error=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div className="oficina">
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
          {this.state.equipo!=undefined &&
          <Row gutter={16}>
            {this.state.equipo.map((item) =>
            <Col md={8} xs={24} key={item.id}className="minCard">
              <Card bordered={false}
                style={{ width: '80%', margin:20 }}
                cover={<div className="divPictureDetail"><img className="pictureDetail" src={item.img_integrante}/></div>}>
                <h4>{item.nombre}</h4>
                <h3>{item.apellido}</h3>
                <p className="mail"><b>{item.correo}</b></p>
                <p className="small studies">{item.profesion}</p>
                <p className="detail small">{item.html}</p>
                <div className="plusDiv"><img className="plus" src={plus}></img>
                </div>
                <p className="detailFooter">OBJETO FAVORITO</p>
              </Card>
            </Col>
            )}
          </Row>
          }
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
        {this.state.galeria!=undefined &&
        <div style={{padding: '0px', margin: '0px', width:'99.4%' }}>
        <Row gutter={16}>
          {this.state.galeria.map((item) =>
          <Col md={6} xs={12}>
            <Card bordered={false}>
              <div className="category">
                <Link to="/template"><img src={item.url_img}></img></Link>
                <p className="textCategoryVertival">CATEGORIA  {item.categoria}</p>
                <div className="textCategory">
                  <p className="textCategoryP">{item.ciudad}, 2018</p>
                  <p><b>{item.titulo}</b></p>
                </div>
              </div>
            </Card>
          </Col>
          )}
        </Row>
      </div>
      }
      <div style={{padding: '35px 0px 0px 0px' }}>
        <Footer/>
      </div>
      </div>
    );
  }
}
export default Oficina;
