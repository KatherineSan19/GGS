import React, { Component } from "react";
import { Icon } from 'antd';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerIcon">
          <Icon type="facebook" style={{padding: '0px 0px 10px 0px' , color: '#BDBDBD'}}/>
          <Icon type="instagram" style={{padding: '0px 0px 10px 10px' , color: '#BDBDBD'}}/>
          <Icon type="twitter" style={{padding: '0px 0px 0px 10px' , color: '#BDBDBD'}}/>
        </div>
        <div>
          <p>© Copyright 2019 GG + S All Rights Reserved</p>
          <p>This is a Website made by <b>Sundried</b></p>
        </div>

      </div>
    );
  }
}

export default Footer;
