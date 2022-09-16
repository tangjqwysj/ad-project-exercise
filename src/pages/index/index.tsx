import React, { Component } from "react"
import axios from "axios"
import Header from "@components/Header"
import { RouteComponentProps } from "react-router-dom"
import { Select, Button, DatePicker } from "antd"
import DataTrend from "@components/DataTrend"
import PromotionCard from "./components/PromotionCard"
import ProductCard from './components/ProductCard';
import { ThemeContext, ThemeType } from "context/theme"
import { SettingOutlined } from "@ant-design/icons"
import "./index.scss"

const { Option } = Select

interface IProps extends RouteComponentProps {}

interface IStates {
   theme: ThemeType;
}

class IndexPage extends Component<IProps,IStates> {
  state = {
    theme: {
      buttonType: "primary",
    },
  }
  componentDidMount() {
    axios
      .get("/ad/index/gray")
      .then((res) => {
        //   console.log("res", res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  hanleContextChange = () => {
    const { theme } = this.state
    const newButtonType = theme.buttonType == "primary" ? "default" : "primary"
    this.setState({
      theme: {
        buttonType: newButtonType,
      },
    })
  }
  render() {
    const { history } = this.props
    const { theme } = this.state
    return (
      <ThemeContext.Provider value={theme}>
        <div className="index-page">
          <div className="head-box">
            <Header history={history}></Header>
          </div>
          <div className="content-box">
            <div className="left-content">
              <div className="chart-area">
                <div className="header-box">
                  <div className="title">数据趋势</div>
                  <div className="select-area">
                    <Select
                      defaultValue="0"
                      style={{ width: 120 }}
                      // onChange={this.handlePromotionChange}
                      size="small"
                    >
                      <Option value="0">全部推广产品</Option>
                      <Option value="1">搜索推广</Option>
                      <Option value="2">一站式推广</Option>
                      <Option value="3">合约推广</Option>
                      <Option value="4">知识营销</Option>
                    </Select>
                    <DatePicker
                      // onChange={this.handalDateChange}
                      size="small"
                      style={{ marginLeft: 10 }}
                      placeholder="请选择日期"
                    />
                  </div>
                </div>
                <DataTrend />
              </div>
              <div className="promotion-card-area">
                <PromotionCard history={history} />
              </div>
              <div className="product-card-area">
               <ProductCard />
              </div>
            </div>
            <div className="right-content"></div>
          </div>
          <div className="foot-box"></div>
          <div className="setting-btn">
            <SettingOutlined
              style={{ fontSize: 36, color: "#326fff" }}
              onClick={this.hanleContextChange}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default IndexPage
