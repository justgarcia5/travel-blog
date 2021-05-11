import React from 'react';

export default function LandingPosts(props) {

  return (
    <div className="landing_posts_div">
      <h3>Latest adventures</h3>
      <div className="lb-row">
        {props.posts.reverse().map((post, index) => {
          if(index <= 2) {
            return(
              <div className="lb-col s4" key={index}>
                <a href={`post/${post.id}`} className='link_to_post'>
                  <img className="responsive-img" src={post.image_url} alt="national parks"/>
                  <p><i className="pin fas fa-map-pin mr-1"></i>{post.title}</p>
                  <i>{post.location}</i>
                </a>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
