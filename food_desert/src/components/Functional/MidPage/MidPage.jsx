import React from 'react'
import MidBg from '../midBg/MidBg'
import './midPage.css'
import bg from '../../../Resources/images/food1.jpeg'

const MidPage = () => {
  return (
    <div
      class="h-96 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <MidBg />
    </div>
  )
}

export default MidPage
