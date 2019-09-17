import React, {Component} from "react";
import "./index.css";
import { Icon,Card, Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import homeImg from "../images/home.jpg";
import logo from '../images/logo_ggs.jpg';


class Home extends Component{
  render(){
    return(
      <div>
        <div className="homeMain">
        <p className="homeText"> Somos una firma de diseño y planificación que busca armonizar los asentamietos humanos con los sistemas naturales.
        </p>
        </div>
      </div>
    );
  }
}
export default Home;
