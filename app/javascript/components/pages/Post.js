import React, { useState, useEffect } from 'react'

export default function Post(props) {
  const [post, setPost] = useState(null);
  const [visible, setVisible] = useState(true);
  const [body, setBody] = useState("");


  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      const res = await fetch(`/posts/${props.match.params.id}.json`);
      res
        .json()
        .then(post => {
          if(cancel) return;
          setPost(post);
          setBody(textFormatter(post.body))
          setVisible(false);
        })
        .catch(err => console.log(err))
    }

    fetchData();
    return () => cancel = true;
  },[])

  const textFormatter = text => {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/  /g, "    \u00a0    ");
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
            {body.split('<br />').map((item, key) => {
              return <p key={key}>{item}<br/></p>
            })}
          </div>
        </div>
      }
    </div>
  )
}
