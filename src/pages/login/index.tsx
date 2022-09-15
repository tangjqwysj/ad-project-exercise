import React, { Component } from "react"
import utils from '@utils/index';

interface Props {}

class LoginPage extends Component<Props> {
   componentDidMount() {
      const params = utils.getUrlParams('id');
      console.log('params:',params);
  }
  render() {
    return (
      <div className="box">
        <span>login page</span>
      </div>
    )
  }
}

export default LoginPage
