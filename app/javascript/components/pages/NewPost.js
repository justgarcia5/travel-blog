import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from "react-dropzone";

import Form from '../layout/Form'

export default function NewPost() {
  // const form = useRef(null)
  const [responseOk, setResponseOk] = useState(null)
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  // const [miles, setMiles] = useState('')
  // const [location, setLocation] = useState('')
  // const [latitude, setLatitude] = useState(null)
  // const [longitude, setLongitude] = useState(null)
  // const [images, setImages] = useState(null)
  const [postAttributes, setPostAttributes] = useState({
    title: '',
    body: '',
    miles: '',
    location: '',
    latitude: null,
    longitude: null,
    images: null
  });

  const handleSubmit = e => {
    e.preventDefault()
    console.log(postAttributes)

    fetch(`/posts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: postAttributes })
    }).then(async res => {
      const json = await res.json();
      (res.status === 201) ? setResponseOk(true) : setResponseOk(false);
      return json;
    })
  };

  const handleChange = e => {
    if(e.target.name === 'images') {
      postAttributes[e.target.name] = e.target.files[0]
      setPostAttributes(postAttributes)
    } else {
      postAttributes[e.target.name] = e.target.value
      setPostAttributes(postAttributes)
    }
    console.log(postAttributes)

  };

  return (
    <div className="form_div">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        responseOk={responseOk}
      />
    </div>
  )
}
