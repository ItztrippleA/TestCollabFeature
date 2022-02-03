import React from 'react'
import MidCard from '../midCard/MidCard'

import bg from '../../../Resources/images/food1.jpeg'

const MidPage = () => {
  return (
    <div
      class="h-96 m-auto bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <MidCard />
    </div>
  )
}

export default MidPage
