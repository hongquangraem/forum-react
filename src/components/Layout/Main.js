import React from 'react'

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="navigation" />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
