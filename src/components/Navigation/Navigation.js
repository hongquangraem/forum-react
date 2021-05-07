import React from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'

import './style.css'
import { ReactComponent as HeadphonesIcon } from '../../assets/icon/headphones.svg'
import { ReactComponent as DiscussionIcon } from '../../assets/icon/conversation.svg'
import { ReactComponent as BloggingIcon } from '../../assets/icon/blog.svg'
import { ReactComponent as ReviewIcon } from '../../assets/icon/review.svg'
import { ReactComponent as MovieReviewIcon } from '../../assets/icon/moviereview.svg'
import { ReactComponent as FoodReviewIcon } from '../../assets/icon/foodreview.svg'
import { ReactComponent as BookReviewIcon } from '../../assets/icon/bookreview.svg'

const { SubMenu } = Menu

const Wrapper = styled.div`
  width: 60%;
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

const StyledSubMenu = styled(SubMenu)`
  width: 15%;
  text-align: center;
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
              {/* </Menu.ItemGroup> */}
            </StyledSubMenu>
            // </StyledMenuItem>
          )
        })}
      </StyledMenu>
    </Wrapper>
  )
}

export default Navigation
