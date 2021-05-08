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
