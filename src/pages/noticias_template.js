import React, { Component } from "react";
import "./index.css";
import 'antd/dist/antd.css';
import { Icon,Card, Button, Row, Col } from 'antd';
import cultura from '../images/cultura.jpg';
import agustinaSantana from '../images/agustinaSantana.png';
import centronoticias from '../images/centronoticias.jpg';
import panel from '../images/panel.jpg';


class Noticias extends Component {
  render() {
    return (
      <div>
        <h3 className="cultura">
          CULTURA
        </h3>
        <h3 className="culturaText">
          lorem ipsum dolor sit amet
        </h3>
        <div className="culturaImg">
        </div>
        <Row>
          <div className="culturaDiv1">
            <div className="agustinaSantana">
              <img src={agustinaSantana}></img>
              <Icon className="share-alt" type="share-alt"/>
              <Icon type="heart"/>
              <p className="culturaText1"> POR AUGUSTINA SANTANA</p>
              <p className="culturaText2">asantana@ggsarquitectos.com</p>
              <p className="culturaText3">Publicado Julio 2019</p>
            </div>
            <h3 className="masNoticias">más noticias</h3>
            <div className="culturaContent">
              <Icon type="plus"/>
              <p>lorem ipsum dolor sit amet</p>
              <Icon type="plus"/>
              <p>vivamus aliquet lectus non semper dapibus.</p>
              <Icon type="plus"/>
              <p>consequat gravida facilisis at, accumsan in ante.</p>
            </div>
          </div>
          <div className="culturaDiv2">
            <div className="culturaSubtitleImg">
              <img className="panel" src={panel}></img>
              <div className="culturaSubtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim pharetra eros non elementum. Nam pulvinar eu ex in ultricies. Pellentesque in aliquam turpis.
              </div>
            </div>
            <div className="p1">
              <p>
              Vivamus cursus ipsum dignissim metus auctor, a aliquet turpis placerat. Sed sodales lectus sed ultrices bibendum. Vestibulum sollicitudin lectus ac lectus venenatis dictum. Nam sed condimentum tortor. lobortis ullamcorper, nisl augue porta felis, rutrum accumsan enim augue non diam
              </p>
              <p>Mauris venenatis lobortis dolor in eleifend. Mauris ultrices vitae metus quis gravida. Curabitur laoreet dui non lacus porttitor, blandit maximus neque viverra. Curabitur nec tempus quam, non posuere felis. Aliquam vel libero erat. Nam hendrerit quam nunc.
              </p>
              <img className="centronoticias" src={centronoticias}></img>
              <p>Proin consectetur dignissim mauris, ac fermentum metus venenatis eu. Donec aliquet erat sed lobortis dictum. Maecenas imperdiet quam eget erat scelerisque, vel dictum justo vestibulum. Donec mattis purus ipsum, ut tempus ligula scelerisque nec. Curabitur in elit luctus, hendrerit sapien tempor, placerat purus. Phasellus tempus ante a nisi interdum convallis non facilisis purus. Quisque tristique laoreet velit eget volutpat. Maecenas vitae metus tellus. Nam luctus tempor justo, non sagittis odio porttitor ut. In elementum in nisi gravida dictum. Proin feugiat vel augue non aliquet. Nunc a luctus neque. Vivamus eros odio, tempor at magna sit amet, vestibulum gravida felis. Donec et lectus mi. Nunc nec vestibulum diam. Curabitur ultrices tempor enim ac vestibulum.
              </p>
            </div>
            </div>
          <div className="culturaDiv3">
            <p><b>Pie de Foto. </b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Row>
      </div>
    );
  }
}
export default Noticias;
