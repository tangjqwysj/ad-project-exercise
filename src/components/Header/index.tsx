import React from "react"
import { MENU_INDEX_CONFIG } from "common/constants/menu"
import MenuItem from "./MenuItem"
import { UserOutlined } from "@ant-design/icons"
import { cloneDeep } from "lodash"
import { MenuItemInfoType } from "./typs"
import "./index.scss"

interface IProps {
  history?: any
}
interface IStates {
  menu: MenuItemInfoType[]
}
class Header extends React.Component<IProps, IStates> {
  state = {
    menu: MENU_INDEX_CONFIG,
  }
  handleClick = (url: string) => {
    const { history } = this.props
    if (history) {
      history.push(url)
    }
  }
  handleMouseEnter = (index: number) => {
    this.setState((state) => {
      return {
        menu: state.menu.map((objItem, i) => {
          let v = cloneDeep(objItem)
          v.isActive = false
          if (i == index) {
            v.isActive = true
          }
          return v
        }),
      }
    })
  }
  render() {
    const userName = "TDDStudio"
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo"></div>
          <div className="menu">
            {this.state.menu.map((menuItem, index) => (
              <MenuItem
                menuItemInfo={menuItem}
                key={`index-menu-item-${menuItem.name}`}
                index={index}
                onClick={(url: string) => {
                  this.handleClick(url)
                }}
                onMouseEnter={(index) => {
                  this.handleMouseEnter(index)
                }}
              ></MenuItem>
            ))}
          </div>
        </div>
        <div className="user-info">
          <UserOutlined />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    )
  }
}

export default Header
