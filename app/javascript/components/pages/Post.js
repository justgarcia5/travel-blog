import React, { useState, useEffect, useRef } from 'react'

export default function Post(props) {
  const [post, setPost] = useState(null);
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

  const dateFormat = () => {
    console.log(post.title)
      // switch() {
      //   case x:
      //     // code block
      //     break;
      //   case y:
      //     // code block
      //     break;
      //   default:
      //     // code block
      // }
  }

  return (
    <div>
      {post &&
        <div className='post'>
          <img src={post.image_url} className='post_landing_image'/>
          <div className='post container center'>
            <h1>{post.title}</h1>
            <i>
              {post.created_at}
            </i>
            <h2>{post.location}</h2>
            <p>{post.body1}</p>
            <p>{post.body2}</p>
            <p>{post.body3}</p>
            <p>{post.body4}</p>
            <p>{post.body5}</p>
          </div>
        </div>
      }
    </div>
  )
}
