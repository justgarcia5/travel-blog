import React from 'react';

export default function Form() {

  const onSubmit = () => {

  };

  const onChange = () => {

  };

  return (
    <div className="form_div">
      <div className="top_padding"/>
      <div className="row container form_row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="longitude" type="number" className="validate" />
              <label for="longitude">Longitude</label>
            </div>
            <div className="input-field col s6">
              <input id="latitude" type="number" className="validate" />
              <label for="latitude">Latitude</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="location" type="text" className="validate" />
              <label for="location">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="miles" type="text" className="validate" />
              <label for="miles">Miles</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" />
              <label for="password">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body" type="text" className="materialize-textarea" />
              <label for="body">Post</label>
            </div>
          </div>
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" multiple/>
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Upload one or more files"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
