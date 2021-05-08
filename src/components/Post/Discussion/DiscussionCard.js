import React from 'react'
import styled from 'styled-components'
import { Skeleton, Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import UserPreview from '../../User/UserPreview'

import { PostTitle, PostBrief } from '../style'
import { LIMIT_POST_BRIEF, LIMIT_POST_TITLE } from '../../../constants'
import CustomTag from '../../shared/CustomTag'
import PostStatistics from '../../shared/PostStatistics'

const Wrapper = styled.div`
  margin-bottom: 40px;
  height: 100%;
`

const StyledCard = styled(Card)`
  width: 100%;
  height: 260px;

  & .ant-card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
      // flex: 1
    }
  }

  box-shadow: ${({ theme }) => theme.boxShadow.general};
`

const PostContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const PostContent = styled.div`
  width: 85%;
  word-wrap: break-word;
`

const PostAuthor = styled.div`
  width: 20%;
  margin-left: 30px;
  height: 100%;
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
  const limitText = (text, maxLength) => {
    let standardizedText = text
    if (text.length > maxLength) {
      const splittedText = text.split(' ')
      standardizedText = `${splittedText.slice(0, maxLength).join(' ')}...`
    }

    return standardizedText
  }
  return (
    <Wrapper>
      <StyledCard>
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
                <PostTitle href="/">
                  {limitText(data.topic, LIMIT_POST_TITLE)}
                </PostTitle>
                <PostBrief>
                  {limitText(data.content, LIMIT_POST_BRIEF)}
                </PostBrief>
              </PostContent>
              <PostAuthor>
                <UserPreview
                  avatarUrl="https://www.flaticon.com/svg/vstatic/svg/4134/4134018.svg?token=exp=1620463847~hmac=a5d5a04ddf1e90dba3a3a5d08f68a910"
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
                  <Link href="/">
                    <CustomTag key={tag} name={tag} />
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
