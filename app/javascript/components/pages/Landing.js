import React, { useState, useEffect } from 'react'

import LandingPosts from '../layout/LandingPosts'
import LandingAbout from '../layout/LandingAbout'
import Insta from '../instagramApi/Insta'

import Camping from '../../packs/images/camping.jpg'
import LandingNationalParks from '../layout/LandingNationalParks'

export default function Landing(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json').then(res => res.json()).then(posts => setPosts(posts))
  },[]);

  return (
    <div>
      <img className="landing-img" src={Camping} />
      <LandingPosts posts={posts} />
      <LandingNationalParks posts={posts} />
      <LandingAbout />
      <Insta instaToken={props.instaToken} limit={12}/>
    </div>
  )
}
