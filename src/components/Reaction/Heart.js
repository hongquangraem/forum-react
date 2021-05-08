import React from 'react'
import styled from 'styled-components'

import { ReactComponent as ReactHeartIcon } from '../../assets/icon/heart.svg'

const StyledReactHeartIcon = styled(ReactHeartIcon)`
  width: 40px;
  height: 30px;
  cursor: pointer;
`

const HeartCount = styled.span`
  margin-top: 15px;
  font-size: 12px;
`

const Wrapper = styled.div`
  display: flex;
`

function ReactHeart({ children }) {
  return (
    <Wrapper>
      <StyledReactHeartIcon />
      <HeartCount>{children}</HeartCount>
    </Wrapper>
  )
}

export default ReactHeart
