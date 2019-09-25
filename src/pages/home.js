import React, {Component} from "react";
import "./index.css";
import Footer from "./footer";
import NavBar from "./navBar";


class Home extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <div className="homeMain">
        <p className="homeText"> Somos una firma de diseño y planificación que busca armonizar los asentamietos humanos con los sistemas naturales.
        </p>
        </div>
        <div style={{padding: '15px 0px 0px 0px' }}>
          <Footer/>
        </div>
      </div>
    );
  }
}
export default Home;
