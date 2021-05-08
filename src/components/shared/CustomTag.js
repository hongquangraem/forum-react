import React from 'react'
import { Tag } from 'antd'

export default function CustomTag({ name, isClosable = false }) {
  return (
    <Tag color="magenta" closable={isClosable}>
      {name}
    </Tag>
  )
}
