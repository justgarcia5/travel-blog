import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

export default function Form() {
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
      <div className="top_padding"/>
      { responseOk && <Redirect to="/" /> }
      <div className="row container form_row">
        <form className="col s12" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="input-field col s6">
              <input id="longitude" type="number" step="any" className="validate" name="longitude" onChange={handleChange}/>
              <label htmlFor="longitude">Longitude</label>
            </div>
            <div className="input-field col s6">
              <input id="latitude" type="number" step="any" className="validate" name="latitude" onChange={handleChange}/>
              <label htmlFor="latitude">Latitude</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="location" type="text" className="validate" name="location" onChange={handleChange}/>
              <label htmlFor="location">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="miles" type="text" className="validate" name="miles" onChange={handleChange}/>
              <label htmlFor="miles">Miles</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" name="title" onChange={handleChange} />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body" type="text" className="materialize-textarea" name="body" onChange={handleChange}/>
              <label htmlFor="body">Post</label>
            </div>
          </div>

          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" name="images" accept="image/png, image/jpeg" onChange={handleChange} multiple/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
      </div>
    </div>
  )
}
