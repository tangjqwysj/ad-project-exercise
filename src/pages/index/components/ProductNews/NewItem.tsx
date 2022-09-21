import React from "react"

interface IProps {
  newsData: {
    title: string
    source: string
    time: string
    link: string
  }[]
}
interface IState {}

class NewsItem extends React.Component<IProps, IState> {
  render() {
    const { newsData } = this.props
    return (
      <div className="news-list">
        {newsData.map((newsItem: any, index: number) => (
          <div
            className="news-item"
            key={`news-item-${index.toString()}`}
          >
            <div className="title">{newsItem.title}</div>
            <div className="other-info">
              <div className="source">{newsItem.source}</div>
              <div className="time">{newsItem.time}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default NewsItem
