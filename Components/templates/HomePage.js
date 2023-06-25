import React from 'react'
import Hero from './Hero'
import Description from './Description'
import DescriptionTwho from './DescriptionTwho'
import Slider from '../module/Slider'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Description/>
        <DescriptionTwho/>
        <Slider/>
    </div>
  )
}

export default HomePage