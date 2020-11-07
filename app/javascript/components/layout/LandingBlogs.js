import React from 'react';

export default function About(props) {

  return (
    <div className="landing_blogs_div">
      <h3>Latest adventures</h3>
      <div className="lb-row">
        {props.posts.reverse().map((post, index) => {
          console.log(post)
          if(index <= 2) {
            return(
              <div className="lb-col s4" key={index}>
                <img className="responsive-img" src={post.image_url} alt="national parks"/>
                <p><i className="pin fas fa-map-pin"></i>{post.title}</p>
                <i>{post.location}</i>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
