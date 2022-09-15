import React from "react"
import { MenuItemInfoType } from "./typs"

interface IProps {
  menuItemInfo: MenuItemInfoType
  index: number
  onClick?: (url: string) => void
  onMouseEnter: (index: number) => void
}

class MenuItem extends React.Component<IProps> {
  handleMenuClick = (url: string) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(url)
    }
  }

  render() {
    const { menuItemInfo, onMouseEnter,index } = this.props
    return (
      <div className="index-menuItem-component-box">
        <div
          className="menu-item-title"
          onClick={() => this.handleMenuClick(menuItemInfo.url)}
          onMouseEnter={() => {
            onMouseEnter(index)
          }}
        >
          {menuItemInfo.name}
          {menuItemInfo.menuChildren.length > 0 && <span className="arrow-icon"></span>}
        </div>

        {/* <div className="bottom-line"> </div> */}
        {menuItemInfo.isActive && <div className="bottom-line-active"></div>}

        {menuItemInfo.menuChildren.length > 0 && (
          <div className="menu-children-box">
            {menuItemInfo.menuChildren.map((menuChild, index) => (
              <div
                className="menu-child"
                key={`menu-child-${menuChild.label}`}
              >
                <span>{menuChild.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default MenuItem
