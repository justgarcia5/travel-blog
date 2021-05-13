import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LandingPosts(props) {

  return (
    <div className="landing_posts_div">
      <h1><FontAwesomeIcon icon={['fas', 'fa-tree']}/> Latest adventures <FontAwesomeIcon icon={['fas', 'fa-tree']}/></h1>
      <div className="lb-row">
        {props.posts.reverse().map((post, index) => {
          if(index <= 2) {
            return(
              <div className="lb-col s4" key={index}>
                <a href={`post/${post.id}`} className='link_to_post'>
                  <img className="responsive-img" src={post.image_url} alt="national parks"/>
                  <p><i className="pin fas fa-map-pin mr-1"></i>{post.location}</p>
                  {/* <i>{post.location}</i> */}
                </a>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
