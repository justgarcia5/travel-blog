import React, { useState, useEffect } from 'react'

export default function Post(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchData();
  },[])

  async function fetchData() {
    const res = await fetch(`/posts/${props.match.params.id}.json`)
    res
      .json()
      .then(post => setPost(post))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {post &&
        <div>
          <img src={post.image_url} />
          <h2>{post.title}</h2>
          <h3>{post.location}</h3>
          <p>{post.body}</p>
        </div>
      }
    </div>
  )
}
