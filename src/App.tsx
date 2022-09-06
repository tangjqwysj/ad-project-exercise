import React, { Component } from "react"
import { RouteComponentProps } from "react-router-dom"
import "./style.scss"

interface Props extends RouteComponentProps {}

class App extends Component<Props> {
  handleRoutes = () => {
    const {
      location: { pathname },
      history,
    } = this.props
    if (pathname === "/") {
      history.push("/index")
      return false
    }
    return true
  }
  render() {
    const { children } = this.props
    return <div className="container">{this.handleRoutes() && children}</div>
  }
}

export default App
