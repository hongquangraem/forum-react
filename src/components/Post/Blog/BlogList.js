import React from 'react'
import BlogCard from './BlogCard'

function BlogList() {
  const items = [
    {
      id: 1,
      topic: 'Topic',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['blog', 'javascript', 'devops'],
      coverUrl:
        'https://i.picsum.photos/id/627/800/800.jpg?hmac=tTbaN6JN6MpHN1-wJwebQ6Isuiaf9B1pFq-F_ImaVaw',
      type: 'blog',
      author: {
        name: 'AuthorB',
      },
    },
    {
      id: 2,
      topic: 'Topic',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['blog', 'javascript', 'devops'],
      coverUrl:
        'https://i.picsum.photos/id/71/800/800.jpg?hmac=YMpGajiRfAQpkjnUR7FkpNcgDqj3dQDYg6wocQBppRI',
      type: 'blog',
      author: {
        name: 'AuthorB',
      },
    },
    {
      id: 3,
      topic: 'Topic',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ['blog', 'javascript', 'devops'],
      coverUrl:
        'https://i.picsum.photos/id/71/800/800.jpg?hmac=YMpGajiRfAQpkjnUR7FkpNcgDqj3dQDYg6wocQBppRI',
      type: 'blog',
      author: {
        name: 'AuthorB',
      },
    },
  ]
  return (
    <>
      {items.map(item => (
        <BlogCard key={item.id} data={item} />
      ))}
    </>
  )
}

export default BlogList
