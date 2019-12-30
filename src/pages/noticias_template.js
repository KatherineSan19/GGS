import React, { Component } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { Icon, Row } from 'antd';
import cultura from '../images/cultura.jpg';
import agustinaSantana from '../images/agustinaSantana.png';
import centronoticias from '../images/centronoticias.jpg';
import flecha from '../images/flecha.jpg';
import panel from '../images/panel.jpg';
import Footer from "./footer";
import RestClient from '../network/restClient';

class Noticia extends Component{
  constructor(props){
    super(props);
    this.state = {
      noticia: undefined
    }
  }

  componentDidMount(){
    console.log(this.props)
    RestClient.getNoticia(this.props.match.params.id_noticia).then(response=>{
      this.setState({noticia:response.noticia});
    }).catch(error=>{
      console.log(error);
    })
  }
  render() {
    return (
      
      <div>
      {this.state.noticia!=undefined &&
        <div className="noticias">
          <h3 className="cultura">
          {this.state.noticia.titulo}</h3>
          <h3 className="culturaText">
          {this.state.noticia.subtitulo}
          </h3>
          <div className="culturaImg">
            <img src={this.state.noticia.img_noticia}></img>
          </div>

          <Row>
            <div className="culturaDiv1">
              <div className="noticiasIcons">
                <div className=""><Icon className="share-alt" type="share-alt"/></div>
                <div style={{ marginTop: '10px' }}><Icon type="heart"/></div>
              </div>
              <div className="agustinaSantana">
                <img className="santana" src={agustinaSantana}></img>
                <p className="culturaText1"><img style={{ width: '20px' }} src={flecha} ></img> POR {this.state.noticia.nombre} {this.state.noticia.apellido}</p>
                <p className="culturaText2">{this.state.noticia.correo}</p>
                <p className="culturaText3">Publicado Julio 2019</p>

              </div>
              <h3 className="masNoticias">más noticias</h3>
              <div className="culturaContent">
                <div><Icon type="plus"/></div>
                <p>lorem ipsum dolor sit amet</p>
                <div><Icon type="plus"/></div>
                <p>vivamus aliquet lectus non semper dapibus.</p>
                <div><Icon type="plus"/></div>
                <p>consequat gravida facilisis at, accumsan in ante.</p>
              </div>
            </div>
            <div className="culturaDiv2">
              <div className="culturaSubtitleImg">
                <img className="panel" src={panel}></img>
                <div className="culturaSubtitle">
                  {this.state.noticia.titulo2}
                </div>
              </div>
              <div className="p1">
                <p className="pNoticia">
                  {this.state.noticia.html}
                </p>
                <p className="pNoticia">
                </p>
                <img className="centronoticias" src={centronoticias}></img>
                <div className="pieDeFoto">
                <p><b>{this.state.noticia.pie_foto}</b></p>
                <p>{this.state.noticia.pie_foto_text}</p>
                </div>
                <p className="pNoticia">
                </p>
              </div>
              </div>
            <div className="culturaDiv3">
              <p><b>{this.state.noticia.pie_foto}</b></p>
              <p>{this.state.noticia.pie_foto_text}</p>
            </div>
            <div className="culturaDiv4">
              <div className="noticiasIcons">
                <div className=""><Icon className="share-alt" type="share-alt"/></div>
                <div style={{ marginTop: '10px' }}><Icon type="heart"/></div>
              </div>
              <div className="agustinaSantana">
                <img className="santana" src={agustinaSantana}></img>
                <p className="culturaText1"><img style={{ width: '20px' }} src={flecha} ></img> POR {this.state.noticia.nombre} {this.state.noticia.apellido}</p>
                <p className="culturaText2">{this.state.noticia.correo}</p>
                <p className="culturaText3">Publicado Julio 2019</p>
              </div>
              <h3 className="masNoticias">más noticias</h3>
              <div className="culturaContent">
                <div><Icon type="plus"/></div>
                <p>lorem ipsum dolor sit amet</p>
                <div><Icon type="plus"/></div>
                <p>vivamus aliquet lectus non semper dapibus.</p>
                <div><Icon type="plus"/></div>
                <p>consequat gravida facilisis at, accumsan in ante.</p>
              </div>
            </div>
          </Row>
          <div style={{padding: '35px 0px 15px 0px' }}>
            <Footer/>
          </div>
        </div>
        }
      </div>
    );
  }
}
export default Noticia;
