import React from 'react'

import LandingBlogs from '../layout/LandingBlogs'
import LandingAbout from '../layout/LandingAbout'

import Camping from '../../packs/images/camping.jpg'
import Logo1 from '../../packs/images/logo.png'
import Logo2 from '../../packs/images/logo2.png'
import LandingNationalParks from '../layout/LandingNationalParks'

export default function Landing() {
  return (
    <div>
      {/* <img className="logo" src={Logo1} /> */}
      <img className="logo2" src={Logo2} />
      <img className="landing-img" src={Camping} />
      <LandingBlogs />
      <LandingAbout />
      <LandingNationalParks />
    </div>
  )
}
