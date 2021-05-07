import React, { useState } from 'react'
import styled from 'styled-components'

import DiscussionList from './Discussion/DiscussionList'
import BlogList from './Blog/BlogList'
import BookReviewList from './Review/BookReviewList'
import AudioList from './Audio/AudioList'
import FoodReviewList from './Review/FoodReviewList'
import MovieReviewList from './Review/MovieReviewList'

const Wrapper = styled.div`
  margin: 50px;
  height: 1000px;
  display: flex;
  flex-direction: column;
`

function renderList(currentMenu) {
  let list
  switch (currentMenu) {
    case 'discussion': {
      list = <DiscussionList />
      break
    }
    case 'blog': {
      list = <BlogList />
      break
    }

    case 'book-review': {
      list = <BookReviewList />
      break
    }

    case 'food-review': {
      list = <FoodReviewList />
      break
    }

    case 'movie-review': {
      list = <MovieReviewList />
      break
    }

    case 'review': {
      list = <BookReviewList />
      break
    }

    case 'audio': {
      list = <AudioList />
      break
    }

    default: {
      list = <DiscussionList />
      break
    }
  }

  return list
}

function PostList({ currentMenu }) {
  return <Wrapper>{renderList(currentMenu)}</Wrapper>
}

export default PostList
