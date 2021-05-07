import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

import Banner from './Banner'
import TrendingMediaList from '../TrendingMedia/TrendingMediaList'
import Navigation from '../Navigation/Navigation'
import PostList from '../Post/PostList'

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

function GeneralLayout({ children }) {
  return (
    <Wrapper>
      <Banner />
      <TrendingMediaList />
      <WrapperLayout>
        <StyledLayout>
          <StyledContent>
            <Navigation />
            <PostList>{children}</PostList>
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
