import React, {Component} from "react";
import {  BrowserRouter, Router, Route, Switch, HashRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./home";
import ProyectosComponet from "./proyectos";
import TemplateComponet from "./proyecto_template";
import OficinaComponet from "./oficina";
import NoticiasComponet from "./noticias_template";
import ContactoComponet from "./contacto";
import NavBar from "./navBar";
class Main extends Component {
  render(){
    return(
      <HashRouter>
        <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/proyectos" component={ProyectosComponet} />
          <Route exact path="/template" component={TemplateComponet} />
          <Route path="/oficina" component={OficinaComponet} />
          <Route path="/noticia" component={NoticiasComponet} />
          <Route path="/contacto" component={ContactoComponet} />
      </HashRouter>
    );
  }
}

export default Main;
