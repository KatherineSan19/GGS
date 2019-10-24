import React, {Component} from "react";
import "./index.css";
import Footer from "./footer";
import RestClient from '../network/restClient';


class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      home: undefined
    }
  }

  componentDidMount(){
    RestClient.getHome().then(response=>{
      this.setState({home:response.home});
    }).catch(error=>{
      console.log(error);
    })
  }

  render(){
    return(
      <div>
        <div className="homeMain">
        {this.state.home!=undefined &&
          <p className="homeText">{this.state.home.html}
          </p>
        }
        </div>
        <div style={{padding: '15px 0px 0px 0px' }}>
          <Footer/>
        </div>
      </div>
    );
  }
}
export default Home;
