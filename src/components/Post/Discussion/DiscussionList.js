import React from 'react'
import styled from 'styled-components'

import DiscussionCard from './DiscussionCard'

const Wrapper = styled.div`
  width: 100%;
  height: 260px;
`

function DiscussionList() {
  const items = [
    {
      id: 1,
      topic:
        'Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic Topic ',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['tagA', 'tagB'],
      author: {
        name: 'AuthorA',
      },
    },
    {
      id: 2,
      topic: 'Topic',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['tagA', 'tagB'],
      author: {
        name: 'AuthorB',
      },
    },
    {
      id: 3,
      topic: 'Topic',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['tagA', 'tagB'],
      author: {
        name: 'AuthorC',
      },
    },
  ]
  return (
    <Wrapper>
      {items.map(item => (
        <DiscussionCard key={item.id} data={item} />
      ))}
    </Wrapper>
  )
}

export default DiscussionList
