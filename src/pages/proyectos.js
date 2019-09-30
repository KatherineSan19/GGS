import React, {Component} from "react";
import "./index.css";
import { Card,Tabs, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";
import {  BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./index.css";
import categoria1 from '../images/cate1.jpg'
import categoria2 from '../images/cate2.jpg'
import categoria3 from '../images/cate3.jpg'
import categoria4 from '../images/cate4.jpg'
import Footer from "./footer";

const { TabPane } = Tabs;

class General extends Component{

  callback=(key)=>{
    console.log(key);
  }

  render(){
    return(
      <div className="">

        <div className="generalTabs">
          <h3><Link to="./noticias">Arquitectura</Link></h3>
          <h3><Link to="./noticias">Diseño Urbano</Link></h3>
          <h3><Link to="./noticias">Paisaje</Link></h3>
          <h3><Link to="./noticias">Planificación Territorial</Link></h3>
          <h3><Link to="./noticias">Planificación Estratégica</Link></h3>
        </div>
        <div className="tabPGeneral">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Arquitectura" key="1">
            </TabPane>
            <TabPane tab="Diseño Urbano" key="2">

            </TabPane>
            <TabPane tab="Paisaje" key="3">

            </TabPane>
            <TabPane tab="Planificación Territorial" key="4">

            </TabPane>
            <TabPane tab="Planificacion Estratégica" key="5">

            </TabPane>
          </Tabs>
        </div>
        <div className="generalImg" style={{padding: '0px', margin: '0px' }}>
          <Row gutter={16}>
            <Col md={6} xs={12}>
              <Card bordered={false}>
                <div className="category">
                  <Link to="/template"><img src={categoria1}></img></Link>
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
                  <Link to="/template"><img src={categoria2}></img></Link>
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
                  <Link to="/template"><img src={categoria3}></img></Link>
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
                  <Link to="/template"><img src={categoria4}></img></Link>
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
                  <Link to="/template"><img src={categoria1}></img></Link>
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
                  <Link to="/template"><img src={categoria2}></img></Link>
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
                  <Link to="/template"><img src={categoria3}></img></Link>
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
                  <Link to="/template"><img src={categoria4}></img></Link>
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
        <div style={{padding: '35px 0px 0px 0px' }}>
          <Footer/>
        </div>
      </div>
    );
  }
}
export default General;
