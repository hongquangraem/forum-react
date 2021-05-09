import { Card } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostTitle = styled(Link)`
  font-size: 25px;
  color: #000;

  &:hover {
    color: #000;
  }
`
export const PostBrief = styled.p`
  font-size: 14px;
  color: #9a8e8e;
  font-style: italic;
  margin-top: 12px;
`

export const StyledCard = styled(Card)`
  width: 100%;
  height: ${({ height }) => `${height}px`};

  & .ant-card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    box-shadow: 2px 11px 23px 7px rgba(0, 0, 0, 0.22);
    transition: box-shadow 0.5s;
  }

  box-shadow: ${({ theme }) => theme.boxShadow.general};
`

export const PostContent = styled.div`
  flex: 85%;
  word-wrap: break-word;
`
