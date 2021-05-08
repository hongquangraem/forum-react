import { push } from 'connected-react-router'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Avatar = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  width: 130px;
  height: 130px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  cursor: pointer;
`

const UserName = styled.a`
  color: #000;
  font-size: 16px;
  margin-bottom: 0;
  cursor: pointer;
  max-width: 170px;
  word-wrap: break-word;

  &:hover {
    color: #000;
  }
`

function UserPreview({ avatarUrl, username }) {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Avatar src={avatarUrl} onClick={() => dispatch(push('/'))} />
      <UserName href="/">{username}</UserName>
    </Wrapper>
  )
}

export default UserPreview
