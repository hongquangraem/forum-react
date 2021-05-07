import { Card } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 214px;
  display: flex;
  justify-content: center;
  padding: 15px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 25px 180px;
`
const StyledCard = styled(Card)`
  margin-right: 54px;
  width: 260px;
  height: 100%;
`

function TrendingMediaList() {
  return (
    <Wrapper>
      <StyledCard>1</StyledCard>
      <StyledCard>2</StyledCard>
      <StyledCard>3</StyledCard>
      <StyledCard>4</StyledCard>
      <StyledCard>5</StyledCard>
      <StyledCard>6</StyledCard>
    </Wrapper>
  )
}

export default TrendingMediaList
