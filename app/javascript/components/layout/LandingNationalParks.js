import React, { useEffect } from 'react'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

// url to a valid topojson file
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

export default function LandingNationalParks() {

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
  },[])

  return (
    <div className="landing_np_div">
      <h3>National Parks Ranked</h3>
      <ComposableMap projection="geoAlbers">
        <Geographies geography={geoUrl}>
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
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-119.5383, 37.8651]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-118.5658, 36.4864]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-112.1871, 37.5930]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-113.0263, 37.2982]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-110.5885, 44.4280]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
        <a className="btn tooltipped" data-position="bottom" data-tooltip="Yosemite National Park">
          <Marker coordinates={[-119.42, 34.01]}>
            <circle r={6} fill="#F53" />
            {/* <p><i className="pin fas fa-map-pin"></i></p> */}
          </Marker>
        </a>
      </ComposableMap>
    </div>
  )
}

