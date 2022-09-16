import React from "react"
import PRODUCTSERVICE_CONFIG from "common/constants/productService"
import "./index.scss"

class ProductCard extends React.Component {
  handleServiceItemClick = (url: string) => {
    let a = document.createElement("a")
    document.body.appendChild(a)
    a.style.display = "none"
    a.href = url
    a.target = "_blank"
    a.click()
    document.body.removeChild(a)
  }
  render() {
    return (
      <div className="product-service-component-box">
        <div className="title">营销服务</div>
        {PRODUCTSERVICE_CONFIG.map((productItem, index) => (
          <div
            className="product-service-item"
            key={`index-menuItem${index.toString()}`}
            onClick={() => {
              this.handleServiceItemClick(productItem.link)
            }}
          >
            <img
              src={productItem.marketToolImgUrl}
              alt=""
            />
            <div className="name">{productItem.marketToolTitle}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default ProductCard
