import React from 'react'

import bannerUrl from '../../assets/img/banner.jpeg'

function Banner() {
  return (
    <img
      style={{
        paddingTop: 48,
        width: '100%',
        height: 350,
        objectFit: 'cover',
        backgroundSize: 'cover',
      }}
      src={bannerUrl}
      alt="banner"
    />
  )
}

export default Banner
