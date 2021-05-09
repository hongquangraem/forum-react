import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import { StyledCard, PostTitle, PostContent, PostBrief } from '../style'
import { LIMIT_POST_DESCRIPTION, LIMIT_POST_TITLE } from '../../../constants'
import { limitText } from '../../../utils/common'
import UserPreview from '../../User/UserPreview'
import CustomTag from '../../shared/CustomTag'
import PostStatistics from '../../shared/PostStatistics'

const Wrapper = styled.div`
  margin-bottom: 40px;
`

const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 30px 0 30px;
`

const PostAuthor = styled.div`
  height: 100%;
  margin-left: 30px;
  flex: 1;
`

const CustomStyledCard = styled(StyledCard)`
  border: none;
  & .ant-card-body {
    padding: 0 !important;
  }
`

const CoverImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  height: 350px;
`

export default function BlogCard({ data }) {
  return (
    <Wrapper>
      <CustomStyledCard height="630" style={{ padding: 0 }}>
        <CoverImage src={data.coverUrl} />
        <PostContentWrapper>
          <PostContent>
            <PostTitle to="/">
              {limitText(data.topic, LIMIT_POST_TITLE)}
            </PostTitle>
            <PostBrief>
              {limitText(data.content, LIMIT_POST_DESCRIPTION)}
            </PostBrief>
          </PostContent>
          <PostAuthor>
            <UserPreview
              avatarUrl="https://avatarfiles.alphacoders.com/153/thumb-1920-153179.png"
              username={data.author.name}
            />
          </PostAuthor>
        </PostContentWrapper>
        <Row
          style={{
            width: '100%',
            marginTop: '15px',
            padding: '0 30px',
          }}>
          <Col span={6} style={{ fontSize: 14 }}>
            2021/05/08 20:00
          </Col>
          <Col span={10}>
            {data.tags.slice(0, 3).map(tag => (
              <Link key={tag} to="/">
                <CustomTag name={tag} />
              </Link>
            ))}
          </Col>
          <Col span={8}>
            <PostStatistics commentCount={10} heartCount={100} />
          </Col>
        </Row>
      </CustomStyledCard>
    </Wrapper>
  )
}
