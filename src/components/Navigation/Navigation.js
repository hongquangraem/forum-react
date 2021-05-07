import React from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'

import './style.css'

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`

const StyledMenuItem = styled(Menu.Item)`
  width: 20%;
  text-align: center;
  margin: 0 10px !important;
`

const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow.general};
`

const StyledSubMenu = styled(Menu.SubMenu)`
  width: 20%;
  text-align: center;
  margin: 0 10px !important;
`

const WrapperIcon = styled.span``

function Navigation({ menus, currentMenu, handleClickMenu }) {
  return (
    <Wrapper>
      <StyledMenu
        onClick={({ key }) => handleClickMenu(key)}
        selectedKeys={[currentMenu]}
        mode="horizontal">
        {menus.map(({ type, key, name, IconComponent, menuItems = [] }) => {
          if (type === 'menuItem') {
            return (
              <StyledMenuItem
                key={key}
                icon={
                  <WrapperIcon>
                    <IconComponent className="icon" />
                  </WrapperIcon>
                }>
                {name}
              </StyledMenuItem>
            )
          }
          return (
            <StyledSubMenu
              onTitleClick={props => handleClickMenu(props.key)}
              key={key}
              icon={
                <WrapperIcon>
                  <IconComponent className="icon" style={{ marginRight: 15 }} />
                </WrapperIcon>
              }
              title={name}>
              {menuItems.map(item => (
                <Menu.Item
                  key={item.key}
                  icon={
                    <WrapperIcon>
                      <item.IconComponent className="icon" />
                    </WrapperIcon>
                  }>
                  {item.name}
                </Menu.Item>
              ))}
            </StyledSubMenu>
          )
        })}
      </StyledMenu>
    </Wrapper>
  )
}

export default Navigation
