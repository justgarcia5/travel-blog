import React, { useState, useEffect, useRef } from 'react'

export default function Post(props) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    fetchData();
  },[])

  async function fetchData() {
    const res = await fetch(`/posts/${props.match.params.id}.json`)
    res
      .json()
      .then(post => setPost(post))
      .catch(err => console.log(err));
      return () => isMounted.current = true;
  }

  return (
    <div>
      {post &&
        <div>
          <img src={post.image_url} className='post_landing_image'/>
          <div className='post container center'>
            <h1>{post.title}</h1>
            <h2>{post.location}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      }
    </div>
  )
}
