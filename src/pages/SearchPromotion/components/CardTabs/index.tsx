import React, { Component } from "react"
import CardItem from "./CardItem"
import "./index.scss"

export interface ICardItemType {
  id: string
  name: string
  currentValue: number
  contemporaryValue: number
  isSelected: boolean
}

interface IProps {
  cardData: ICardItemType[]
  onChange?: (selectedId: string) => void
}

class CardTabs extends Component<IProps> {
  handleCardItemClick = (selectedId: string) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(selectedId)
    }
  }
  render() {
    const { cardData } = this.props
    return (
      <div className="search-page-card-tabs-component-box">
        {cardData.map((cardItem: ICardItemType, index: number) => (
          <CardItem
            cardItem={cardItem}
            onClick={(selectedId: string) => {
              this.handleCardItemClick(selectedId)
            }}
            key={`carditem${index.toString()}`}
          />
        ))}
      </div>
    )
  }
}

export default CardTabs
