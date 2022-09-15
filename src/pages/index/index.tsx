import React, { Component } from "react"
import axios from "axios"
import Header from "@components/Header"
import { RouteComponentProps } from "react-router-dom"
import { Select, Button, DatePicker } from "antd"
import DataTrend from "@components/DataTrend"
import './index.scss'

const { Option } = Select

interface Props extends RouteComponentProps {}

class IndexPage extends Component<Props> {
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
  render() {
    const { history } = this.props
    return (
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
            <div className="promotion-card-area"></div>
            <div className="product-card-area"></div>
          </div>
          <div className="right-content"></div>
        </div>
        <div className="foot-box"></div>
        <div className="setting-btn"></div>
      </div>
    )
  }
}

export default IndexPage
