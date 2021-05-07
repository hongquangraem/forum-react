import React, { useState } from 'react'
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

function Navigation() {
  const [currentTab, setCurrentTab] = useState('1')
  const handleClick = e => {
    setCurrentTab(e.key)
  }

  return (
    <Wrapper>
      <StyledMenu
        onClick={handleClick}
        selectedKeys={[currentTab]}
        mode="horizontal">
        <StyledMenuItem
          key="discussion"
          icon={
            <WrapperIcon>
              <DiscussionIcon className="icon" />
            </WrapperIcon>
          }>
          Discussion
        </StyledMenuItem>
        <StyledMenuItem
          key="blog"
          icon={
            <WrapperIcon>
              <BloggingIcon className="icon" />
            </WrapperIcon>
          }>
          Blog
        </StyledMenuItem>
        <StyledSubMenu
          key="review"
          icon={
            <WrapperIcon>
              <ReviewIcon className="icon" style={{ marginRight: '10px' }} />
            </WrapperIcon>
          }
          title="Review">
          <Menu.Item
            key="book"
            icon={
              <WrapperIcon>
                <BookReviewIcon className="icon" />
              </WrapperIcon>
            }>
            Book
          </Menu.Item>
          <Menu.Item
            key="food"
            icon={
              <WrapperIcon>
                <FoodReviewIcon className="icon" />
              </WrapperIcon>
            }>
            Food
          </Menu.Item>
          <Menu.Item
            key="movie"
            icon={
              <WrapperIcon>
                <MovieReviewIcon className="icon" />
              </WrapperIcon>
            }>
            Movie
          </Menu.Item>
        </StyledSubMenu>
        <StyledMenuItem
          key="audio"
          icon={
            <WrapperIcon>
              <HeadphonesIcon className="icon" />
            </WrapperIcon>
          }>
          Audio
        </StyledMenuItem>
      </StyledMenu>
    </Wrapper>
  )
}

export default Navigation
