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
      <div className="generalTabs">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Planificación Estratégica" key="1">
            <div style={{padding: '0px', margin: '0px' }}>
              <Row gutter={16}>
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
            <div style={{padding: '0px', margin: '0px' }}>
              <Row gutter={16}>
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
          </TabPane>
          <TabPane tab="Planificación Territorial" key="2">

          </TabPane>
          <TabPane tab="Paisaje" key="3">

          </TabPane>
          <TabPane tab="Diseño Urbano" key="4">

          </TabPane>
          <TabPane tab="Arquitectura" key="5">

          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default General;
