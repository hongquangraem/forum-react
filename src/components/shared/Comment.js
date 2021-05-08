import React from 'react'
import styled from 'styled-components'

import { ReactComponent as CommentIcon } from '../../assets/icon/comments.svg'

const Wrapper = styled.div`
  display: flex;
`

const StyledCommentIcon = styled(CommentIcon)`
  width: 40px;
  height: 30px;
  cursor: pointer;
`

const CommentCount = styled.span`
  margin-top: 15px;
  font-size: 12px;
`

export default function Comment({ children }) {
  return (
    <Wrapper>
      <StyledCommentIcon />
      <CommentCount>{children}</CommentCount>
    </Wrapper>
  )
}
