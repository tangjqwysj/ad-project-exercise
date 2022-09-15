import React, { Component } from "react"
import { HashRouter as Router, withRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"

import IndexPage from "pages/index"
import LoginPage from "pages/login"
import SearchPromotionPage from 'pages/SearchPromotion';

import App from "../App"

const routes = [
  {
    path: "/index",
    exact: true,
    component: IndexPage,
    title: "",
  },
  {
    path: "/searchPromotion",
    exact: false,
    component: SearchPromotionPage,
    title: "",
  },
  {
    path: "/login",
    exact: true,
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
