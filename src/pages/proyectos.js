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
import RestClient from '../network/restClient';

const { TabPane } = Tabs;

class General extends Component{

  constructor(props){
    super(props);
    this.state={
      proyectos: undefined

    }
  }
  callback=(key)=>{
    console.log(key);
  }
  componentDidMount(){
    RestClient.getProyectos().then(response=>{
      this.setState({proyectos:response.proyectos});
    }).catch(error=>{
      console.log(error);
    })
  }
  render(){
    return(
      <div className="">

        <div className="generalTabs">
          <h3><Link to="./Arquitectura">Arquitectura</Link></h3>
          <h3><Link to="./Diseño_Urbano">Diseño Urbano</Link></h3>
          <h3><Link to="./Paisaje">Paisaje</Link></h3>
          <h3><Link to="./Planificación_Territorial">Planificación Territorial</Link></h3>
          <h3><Link to="./Planificación_Estratégica">Planificación Estratégica</Link></h3>
          <h3><Link to="./noticia">Noticias</Link></h3>
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

            <TabPane tab="Noticias" key="6">
            </TabPane>

          </Tabs>
        </div>
        <div className="generalImg" style={{padding: '0px', margin: '0px' }}>
        {this.state.proyectos!=undefined &&
          <Row gutter={16}>
          {this.state.proyectos.length>0 &&
            this.state.proyectos.map(pro=>
            <Col md={6} xs={12}>
              <Card bordered={false}>
                <div className="category">
                  <Link to="/proyecto"><img src={pro.url_img}></img></Link>
                  <p className="textCategoryVertival">CATEGORIA {pro.categoria}</p>
                  <div className="textCategory">
                    <p className="textCategoryP">{pro.ciudad}, 2018</p>
                    <p>{pro.titulo}</p>
                  </div>
                </div>
              </Card>
            </Col>
          )
        }
          </Row>
        }
        </div>
        <div style={{padding: '35px 0px 0px 0px' }}>
          <Footer/>
        </div>
      </div>
    );
  }
}
export default General;
