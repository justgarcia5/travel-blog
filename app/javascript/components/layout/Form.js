import React from 'react'

export default function Form(props) {
  return (
    <div>
      <div className="top_padding"/>
      { props.responseOk && <Redirect to="/" /> }
      <div className="row container form_row">
        <form className="col s12" onSubmit={props.handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="input-field col s6">
              <input id="longitude" type="number" step="any" className="validate" name="longitude" onChange={props.handleChange}/>
              <label htmlFor="longitude">Longitude</label>
            </div>
            <div className="input-field col s6">
              <input id="latitude" type="number" step="any" className="validate" name="latitude" onChange={props.handleChange}/>
              <label htmlFor="latitude">Latitude</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="location" type="text" className="validate" name="location" onChange={props.handleChange}/>
              <label htmlFor="location">Location</label>
            </div>
            <div className="input-field col s6">
              <input id="miles" type="text" className="validate" name="miles" onChange={props.handleChange}/>
              <label htmlFor="miles">Miles</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" name="title" onChange={props.handleChange} />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body1" type="text" className="materialize-textarea" name="body1" onChange={props.handleChange}/>
              <label htmlFor="body1">Body1</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body2" type="text" className="materialize-textarea" name="body2" onChange={props.handleChange}/>
              <label htmlFor="body2">Body2</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body3" type="text" className="materialize-textarea" name="body3" onChange={props.handleChange}/>
              <label htmlFor="body3">Body3</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body4" type="text" className="materialize-textarea" name="body4" onChange={props.handleChange}/>
              <label htmlFor="body4">Body4</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="body5" type="text" className="materialize-textarea" name="body5" onChange={props.handleChange}/>
              <label htmlFor="body5">Body5</label>
            </div>
          </div>

          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" name="images" accept="image/png, image/jpeg" onChange={props.handleChange} multiple/>
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
