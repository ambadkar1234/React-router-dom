import React from 'react'

import img1 from "../media/blog.jpg"

const Heros = () => {
  return (
    <div>
      Heros
      <img className='img-fluid' src={img1} alt="" />
      <img className='img-fluid' src="https://picsum.photos/200" alt="" />
    </div>
  )
}

export default Heros