import React, { useState, useEffect } from 'react'

import LandingPosts from '../layout/LandingPosts'
import LandingAbout from '../layout/LandingAbout'
import Insta from '../instagramApi/Insta'
import AngelaCover from '../../packs/images/cover.jpeg'
import LandingNationalParks from '../layout/LandingNationalParks'
import YouTube from '../layout/YouTube'

export default function Landing(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = false;
    fetch('/posts.json').then(res => res.json()).then(posts => {
      if(!isMounted) setPosts(posts)
    })
    return () => isMounted = true;
  },[]);

  return (
    <div>
      <img className="landing-img" src={AngelaCover} />
      <YouTube />
      <LandingPosts posts={posts} />
      <LandingNationalParks posts={posts} />
      <LandingAbout />
      <Insta instaToken={props.instaToken} limit={12}/>
    </div>
  )
}
