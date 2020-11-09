import React, { useUffect, useState } from 'react'

export default function Post() {
  const [post, setPost] = useState(null);

  const getPost = (id) => {
    async function fetchData() {
      const res = await fetch(`post/${id}.json`)
      res
        .json()
        .then(post => setPost(post))
        .catch(err => console.log(err));
    }
  }

  return (
    <div>

    </div>
  )
}
