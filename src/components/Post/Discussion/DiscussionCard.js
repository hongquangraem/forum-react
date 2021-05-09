import React from 'react'
import styled from 'styled-components'
import { Skeleton, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import UserPreview from '../../User/UserPreview'
import { PostTitle, PostBrief, PostContent, StyledCard } from '../style'
import { LIMIT_POST_BRIEF, LIMIT_POST_TITLE } from '../../../constants'
import CustomTag from '../../shared/CustomTag'
import PostStatistics from '../../shared/PostStatistics'
import { limitText } from '../../../utils/common'

const Wrapper = styled.div`
  margin-bottom: 40px;
`

const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const PostAuthor = styled.div`
  height: 100%;
  margin-left: 30px;
  flex: 1;
`

const StyledSkeleton = styled(Skeleton)`
  display: flex;
  flex-direction: row-reverse;

  & .ant-skeleton-header {
    margin-left: 40px;
  }
`

function DiscussionCard({ data }) {
  const loading = false
  return (
    <Wrapper>
      <StyledCard height="265">
        {loading && (
          <StyledSkeleton
            active
            avatar={{ size: 'large' }}
            paragraph={{ rows: 4 }}
          />
        )}
        {!loading && (
          <>
            <PostContentWrapper>
              <PostContent>
                <PostTitle to="/">
                  {limitText(data.topic, LIMIT_POST_TITLE)}
                </PostTitle>
                <PostBrief>
                  {limitText(data.content, LIMIT_POST_BRIEF)}
                </PostBrief>
              </PostContent>
              <PostAuthor>
                <UserPreview
                  avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkwYQuTYcqB7wnAvzApNYO2MLl_Llz4RyyA&usqp=CAU"
                  username={data.author.name}
                />
              </PostAuthor>
            </PostContentWrapper>
            <Row style={{ width: '100%', height: '100%', marginTop: '15px' }}>
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
          </>
        )}
      </StyledCard>
    </Wrapper>
  )
}

export default DiscussionCard
