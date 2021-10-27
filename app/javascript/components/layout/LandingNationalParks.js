import React, { useEffect, useState } from 'react'
import {
  Popover,
  OverlayTrigger
} from 'react-bootstrap'


import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

import Mountains from '../../packs/images/mtn.gif'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

export default function LandingNationalParks(props) {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {})
  },[])

  const popover = (title, location, post) => {
    return (
      <Popover id="popover-basic" transition="true">
        <Popover.Title as="h2"><a href={`post/${post}`} className='link_to_blog'><p><i className="pin fas fa-map-pin"></i>{location}</p></a></Popover.Title>
        {/* <Popover.Content>
          <a href={`post/${post}`} className='link_to_blog'><p><i className="pin fas fa-map-pin"></i>{location}</p></a>
        </Popover.Content> */}
      </Popover>
    )
  };

  return (
    <div className="landing_np_div">
      <div className="landing_np_img_div">
        <img src={Mountains} alt="mountains"/>
      </div>
      <h1>National Parks <FontAwesomeIcon icon={faMountain}/></h1>
      <ComposableMap projection="geoAlbers">
        <Geographies geography={geoUrl} className='geographies'>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#A9A9A9"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        {props.posts.map((post, index) => {
          return(
            <OverlayTrigger trigger={["click", "focus"]} placement="right" overlay={popover(post.title, post.location, post.id)} rootClose key={index} >
              <a className="btn tooltipped" variant="success">
                <Marker coordinates={[post.longitude, post.latitude]}>
                  <circle r={4} fill="#F53" />
                </Marker>
              </a>
            </OverlayTrigger>
          )
        })}
      </ComposableMap>
    </div>
  )
}
