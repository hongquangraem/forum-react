import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

import logo from '../../assets/img/logo-codersx.jpeg'

const { Header } = Layout

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledHeader = styled(Header)`
  background-color: #fff;
  border-bottom: 2px solid red;
  height: 48px;
  line-height: 48px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  width: 35px;
  height: 35px;
  min-width: 35px;
  min-height: 35px;
  background-size: cover;
  background-position: center;
  margin-top: 6px;
`

const StyledMenuItem = styled(Menu.Item)`
  color: red !important;
  border-radius: 6px;
  margin-right: 2px !important;
  margin-left: 2px !important;
  width: 99px !important;
  border-bottom: none !important;
  text-align: center;
  color: red;
  height: 31px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  &:hover {
    background-color: #ff9e9e !important;
    color: #fff !important;
  }

  &.ant-menu-item-selected {
    background-color: #ff9e9e !important;
    color: #fff !important;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`

const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
`

function Nav() {
  const dispatch = useDispatch()
  const menuTabs = [
    {
      key: 'stream',
      name: 'Stream',
      path: '/stream',
    },
    {
      key: 'add-post',
      name: 'Add Post',
      path: '/add-post',
    },
    {
      key: 'login',
      name: 'Login',
      path: '/login',
    },
  ]
  const [currentTab, setCurrentTab] = useState(menuTabs[0].key)
  const handleClickLogo = () => {
    setCurrentTab('stream')
    dispatch(push('/stream'))
  }

  const handleClickSubMenu = (tab, path) => {
    setCurrentTab(tab)
    dispatch(push(path))
  }

  return (
    <StyledHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Wrap>
        <LogoWrapper onClick={handleClickLogo}>
          <Logo src={logo} />
          <span
            style={{
              marginLeft: 10,
              fontWeight: 500,
              fontSize: 20,
              cursor: 'pointer',
            }}>
            Forum
          </span>
        </LogoWrapper>
        <StyledMenu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[currentTab]}
          selectedKeys={[currentTab]}>
          {menuTabs.map(tab => (
            <StyledMenuItem
              key={tab.key}
              onClick={() => handleClickSubMenu(tab.key, tab.path)}
              title={tab.name}>
              {tab.name}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </Wrap>
    </StyledHeader>
  )
}

export default Nav
