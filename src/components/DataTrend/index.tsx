import React from "react"
import { cloneDeep } from "lodash"
import CardTabs from "./components/CardTabs"
import LineChart from "./components/LineChart"
import { CardItemType } from "./components/CardTabs/types"
import "./index.scss"

const defaultCardData = [
  {
    id: "1",
    name: "消费（元）",
    value: 2000,
    persent: "",
    icon: "assets/imgs/card-icon1",
    isSelected: true,
  },
  {
    id: "2",
    name: "展现（次）",
    value: 5988,
    persent: 88.9,
    icon: "assets/imgs/card-icon2",
    isSelected: false,
  },
  {
    id: "3",
    name: "点击（次）",
    value: 199,
    persent: 12.6,
    icon: "assets/imgs/card-icon3",
    isSelected: false,
  },
]

interface IProps {
  cardData?: any
}

class Chart extends React.Component<IProps> {
  state = {
    cardData: this.props.cardData || defaultCardData,
    chartData: [
      {
        year: "2011",
        value: 3,
      },
      {
        year: "2012",
        value: 4,
      },
      {
        year: "2013",
        value: 3.5,
      },
      {
        year: "2014",
        value: 5,
      },
      {
        year: "2015",
        value: 4.9,
      },
      {
        year: "2016",
        value: 6,
      },
      {
        year: "2017",
        value: 7,
      },
      {
        year: "2018",
        value: 9,
      },
      {
        year: "2019",
        value: 13,
      },
    ],
  }

  handleCardTabsChange = (selectedId: string) => {
    const newCardData = this.state.cardData.map((cardItem: CardItemType) => {
      let tempCardItem = cloneDeep(cardItem)
      tempCardItem.isSelected = false
      if (tempCardItem.id == selectedId) {
        tempCardItem.isSelected = true
      }
      return tempCardItem
    })

    const newChartData = this.state.chartData.map((chartItem) => {
      let tempChartItem = cloneDeep(chartItem)
      tempChartItem.value += 2
      return tempChartItem
    })

    this.setState({
      cardData: newCardData,
      chartData: newChartData,
    })
  }
  render() {
    const { cardData, chartData } = this.state
    return (
      <div className="data-trend-component-box">
        <div className="card-tabs-box">
          <CardTabs
            cardData={cardData}
            onChange={(selectedId: string) => {
              this.handleCardTabsChange(selectedId)
            }}
          ></CardTabs>
        </div>
        <div className="line-chart-box">
          <LineChart chartData={chartData} />
        </div>
      </div>
    )
  }
}

export default Chart
