import React from 'react'

import LandingBlogs from '../layout/LandingBlogs'
import LandingAbout from '../layout/LandingAbout'

import Pear from '../../packs/images/woman.jpg'
import Logo from '../../packs/images/logo.png'

export default function Landing() {
  return (
    <div>
      <img className="landing-img" src={Pear} />
      {/* <img className="logo" src={Logo} /> */}
      <LandingBlogs />
      <LandingAbout />
    </div>
  )
}
