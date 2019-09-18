import React, {Component} from "react";
import "./index.css";
import { Icon,Card,Tabs, Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import categoria1 from '../images/categoria11.jpg'
import categoria2 from '../images/categoria2.jpg'
import categoria3 from '../images/categoria3.jpg'
import categoria4 from '../images/categoria4.jpg'

const { TabPane } = Tabs;

class General extends Component{

  callback=(key)=>{
    console.log(key);
  }

  render(){
    return(
      <div className="">
        <div className="generalTabs">
          <h3><a href="./noticias_template">Arquitectura</a></h3>
          <h3><a href="./noticias_template">Diseño Urbano</a></h3>
          <h3><a href="./noticias_template">Paisaje</a></h3>
          <h3><a href="./noticias_template">Planificación Territorial</a></h3>
          <h3><a href="./noticias_template">Planificación Estratégica</a></h3>
        </div>
        <div className="generalImg" style={{padding: '0px', margin: '0px' }}>
          <Row gutter={16}>
            <Col md={6} xs={12}>
              <Card bordered={false}>
                <div className="category">
                  <img src={categoria1}></img>
                  <p className="textCategoryVertival">CATEGORIA 1</p>
                  <div className="textCategory">
                    <p className="textCategoryP">Manta, 2018</p>
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{padding: '0px', margin: '0px' }}>
          <Row gutter={16}>
            <Col md={6} xs={12}>
              <Card bordered={false}>
                <div className="category">
                  <img src={categoria1}></img>
                  <p className="textCategoryVertival">CATEGORIA 1</p>
                  <div className="textCategory">
                    <p className="textCategoryP">Manta, 2018</p>
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
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
                    <p>Planificación de la diversificación turística</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default General;
