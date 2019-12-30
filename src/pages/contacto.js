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
import { Form, Icon, Button } from 'antd';
import {  BrowserRouter as Router, Link} from "react-router-dom";
import { Alert } from 'antd';
import ReactDOM from 'react-dom';
import { notification, Divider } from 'antd';


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}




class Contacto extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contacto: undefined,
      otherpro: []
    }
  }

  componentDidMount(){ 
    RestClient.getContacto().then(response=>{
      this.setState({contacto:response.contacto});
    }).catch(error=>{
      console.log(error);
    })
    RestClient.getOtherpro().then(response=>{
      this.setState({otherpro:response.otherpro});
    }).catch(error=>{
      console.log(error);
    })
  }


  handleSubmit = e => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       let obj={...values};
       RestClient.getEmail(obj).then(response=>{
         this.setState({email:response.email});
       }).catch(error=>{
         console.log('Received values of form: ', values, error);
       })
     }
   });
 };

  render(){
    const openNotification = type => {
      notification [type] ({
        message: `Éxito en el Registro`,
        description:
          'En pocos minutos recibirá un Email al correo electrónico ingresado',
      });
    };


     const { getFieldDecorator, getFieldsError } = this.props.form;
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

        <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="contactoPanelMail">
          <div className="contactoMail">
            <div className="contactoEmail">
              <p className="contactoInput">Enter your mail</p>
              <Row gutter={50}>
                <Col xs={20}>
                  <Form.Item>
                    {getFieldDecorator('mail', {
                      rules: [
             {
               type: 'email',
               message: 'Correo electrónico inválido!',
             },
             {
               required: true,
               message: 'Por favor ingresa un correo electrónico!',
             },
           ],
                    })
                    (
                      <Input
                        style={{width: '107%'}}
                        prefix={<Icon type="email"/>}
                        placeholder="Únete"
                        />
                    ) }
                  </Form.Item>
                </Col>
                <Col xs={4}>
                <Form.Item>
                <input  style={{ width: '115%' }} type="image" src={flecha} disabled={hasErrors(getFieldsError())}  onClick={() => openNotification('success')}/>
                </Form.Item>
                </Col>
              </Row>
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

              <Row>
              <Col xs={19}>
              <Form.Item>
                {getFieldDecorator('mail', {
                  rules: [
         {
           type: 'email',
           message: 'Correo electrónico inválido!',
         },
         {
           required: true,
           message: 'Por favor ingresa un correo electrónico!',
         },
       ],
                })
                (
                  <Input
                    style={{width: '107%'}}
                    prefix={<Icon type="email"/>}
                    placeholder="Únete"
                    />
                ) }

                <Alert message="Registro con exito" type="success" showIcon />)

                <Alert
     message="Registro con exito"
     description="Pronto te llegara un Email a tu correo Electronico"
     type="success"
     showIcon
   />

              </Form.Item>
              </Col>
              <Col xs={3}>
            <input style={{ width: '115%' }} type="image" src={flecha} />
            </Col>
            </Row>
            </div>
          </div>

          <div className="contactoMsjNone">
          ¿Quiéres formar parte de nuestro equipo de colaboradores?
          </div>
        </div>
        </Form>

        <div className="subtitle2">
          <h2 className="mainText1">Algunos Proyectos</h2>
        </div>
        <div style={{padding: '0px', margin: '0px', width:'99%' }}>
        {this.state.otherpro!=undefined &&
        <Row>
        {this.state.otherpro.length>0 &&
          this.state.otherpro.map(other=>
          <Col md={6} xs={12}>
            <Card bordered={false}>
            <div className="category">
            <Link to="/proyecto"><img src={other.html}></img></Link>
            <p className="textCategoryVertival">CATEGORIA  {other.categoria}</p>
            <div className="textCategory">
              <p className="textCategoryP">{other.ciudad}, 2018</p>
              <p><b>{other.titulo}</b></p>
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
const WrappedContacto = Form.create()(Contacto);

export default WrappedContacto ;
