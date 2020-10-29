import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Form() {
  const [responseOk, setResponseOk] = useState(null)
  const [postAttributes, setPostAttributes] = useState({
    longitude: null,
    latitude: null,
    miles: '',
    location: '',
    title: '',
    body: '',
  })

  const onSubmit = e => {
    e.preventDefault()
    console.log(postAttributes)
    fetch(`/posts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: postAttributes })
    }).then(res => {
      return res.json().then((json) => {
        if(res.status === 201) {
          setResponseOk(true)
        } else {
          setResponseOk(false)
        }
        return json
      })
    })

  };

  const onChange = e => {
    postAttributes[e.target.name] = e.target.value
    setPostAttributes(postAttributes)
  };



  return (
    <div className="form_div">
      <div className="top_padding"/>
      {responseOk &&
        <Redirect to="/" />
      }
      <div className="row container form_row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="longitude" type="number" className="validate" name="longitude" onChange={onChange}/>
              <label htmlFor="longitude">Longitude</label>
            </div>
            <div className="input-field col s6">
              <input id="latitude" type="number" className="validate" name="latitude" onChange={onChange}/>
              <label htmlFor="latitude">Latitude</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="location" type="text" className="validate" name="location" onChange={onChange}/>
              <label htmlFor="location">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="miles" type="text" className="validate" name="miles" onChange={onChange}/>
              <label htmlFor="miles">Miles</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" name="title" onChange={onChange} />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body" type="text" className="materialize-textarea" name="body" onChange={onChange}/>
              <label htmlFor="body">Post</label>
            </div>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
      </div>
    </div>
  )
}
