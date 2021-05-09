import React, { useState } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import MENUS from './menus'

import Banner from './Banner'
import TrendingMediaList from '../TrendingMedia/TrendingMediaList'
import Navigation from '../Navigation/Navigation'
import PostList from '../Post/PostList'

const Wrapper = styled.div`
  padding-top: 48px;
  height: 1000px;
`

const WrapperLayout = styled.div`
  padding: 50px;
`

const StyledLayout = styled(Row)``

const StyledContent = styled(Col)``

const StyledSider = styled(Col)`
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
  const handleClickMenu = menu => {
    setCurrentMenu(menu)
  }
  return (
    <Wrapper>
      <Banner />
      <TrendingMediaList />
      <WrapperLayout>
        <StyledLayout>
          <StyledContent xxl={{ span: 14, offset: 2 }}>
            <Navigation
              handleClickMenu={handleClickMenu}
              menus={MENUS}
              currentMenu={currentMenu}
            />
            <PostList currentMenu={currentMenu} />
          </StyledContent>
          <StyledSider xl={{ span: 4, offset: 2 }}>
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
