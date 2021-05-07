import React, { useState } from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

import Banner from './Banner'
import TrendingMediaList from '../TrendingMedia/TrendingMediaList'
import Navigation from '../Navigation/Navigation'
import PostList from '../Post/PostList'
import { ReactComponent as HeadphonesIcon } from '../../assets/icon/headphones.svg'
import { ReactComponent as DiscussionIcon } from '../../assets/icon/conversation.svg'
import { ReactComponent as BloggingIcon } from '../../assets/icon/blog.svg'
import { ReactComponent as ReviewIcon } from '../../assets/icon/review.svg'
import { ReactComponent as MovieReviewIcon } from '../../assets/icon/moviereview.svg'
import { ReactComponent as FoodReviewIcon } from '../../assets/icon/foodreview.svg'
import { ReactComponent as BookReviewIcon } from '../../assets/icon/bookreview.svg'

const { Content, Sider } = Layout

const Wrapper = styled.div`
  padding-top: 48px;
  height: 1000px;
`

const WrapperLayout = styled.div`
  padding: 50px;
`

const StyledLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.background};
`

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`

const StyledSider = styled(Sider)`
  display: flex;
  flex-direction: column;
  flex: 0 0 420px !important;
  max-width: 420px !important;
  min-width: 420px !important;
  width: 420px !important;
  background-color: violet;
`

function GeneralLayout() {
  const [currentMenu, setCurrentMenu] = useState('discussion')
  const menus = [
    {
      key: 'discussion',
      name: 'Discussion',
      type: 'menuItem',
      IconComponent: DiscussionIcon,
    },
    {
      key: 'blog',
      name: 'Blog',
      type: 'menuItem',
      IconComponent: BloggingIcon,
    },
    {
      key: 'review',
      name: 'Review',
      type: 'subMenu',
      IconComponent: ReviewIcon,
      menuItems: [
        {
          key: 'book-review',
          name: 'Book',
          type: 'menuItem',
          IconComponent: BookReviewIcon,
        },
        {
          key: 'food-review',
          name: 'Food',
          type: 'menuItem',
          IconComponent: FoodReviewIcon,
        },
        {
          key: 'movie-review',
          name: 'Movie',
          type: 'menuItem',
          IconComponent: MovieReviewIcon,
        },
      ],
    },
    {
      key: 'audio',
      name: 'Audio',
      type: 'menuItem',
      IconComponent: HeadphonesIcon,
    },
  ]
  const handleClickMenu = menu => {
    console.log(menu)
    setCurrentMenu(menu)
  }
  return (
    <Wrapper>
      <Banner />
      <TrendingMediaList />
      <WrapperLayout>
        <StyledLayout>
          <StyledContent>
            <Navigation
              handleClickMenu={handleClickMenu}
              menus={menus}
              currentMenu={currentMenu}
            />
            <PostList currentMenu={currentMenu} />
          </StyledContent>
          <StyledSider>
            <div className="topUserRanks">TopUserRanks</div>
            <div className="topTagRanks">topTagRanks</div>
            <div className="mostViewRanks">mostViewRanks</div>
            <div className="topOnlineUser">topOnlineUser</div>
          </StyledSider>
        </StyledLayout>
      </WrapperLayout>
    </Wrapper>
  )
}

export default GeneralLayout
