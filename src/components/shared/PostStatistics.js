import React from 'react'
import styled from 'styled-components'

import Heart from '../Reaction/Heart'
import Comment from './Comment'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`

export default function PostStatistics({ heartCount, commentCount }) {
  return (
    <Wrapper>
      <Heart>{heartCount}</Heart>
      <Comment>{commentCount}</Comment>
    </Wrapper>
  )
}
