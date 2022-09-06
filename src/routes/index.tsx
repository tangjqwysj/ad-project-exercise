import React, { Component } from "react"
import { HashRouter as Router, withRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"

import IndexPage from "pages/index"
import LoginPage from "pages/login"

import App from "../App"

const routes = [
  {
    path: "/index",
    exact: false,
    component: IndexPage,
    title: "",
  },
  {
    path: "/login",
    exact: false,
    component: LoginPage,
    title: "",
  },
]

const AppWrap = withRouter(App)

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppWrap>{renderRoutes(routes.map((item) => ({ ...item, key: item.path })))}</AppWrap>
        </Router>
      </div>
    )
  }
}

export default AppRoute
