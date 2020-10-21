import React from 'react'

import PearLake from '../../packs/images/pearlake.jpg'
import Yosemite from '../../packs/images/yosemite.jpg'
import Cusco from '../../packs/images/cusco.jpg'


export default function About() {
  return (
    <div className="landing_blogs_div">
      <h3>Latest adventures</h3>
      <div className="lb-row">
        <div className="lb-col s4">
          <img className="responsive-img" src={PearLake} />
          <p><i className="pin fas fa-map-pin"></i> Pear Lake</p>
          <i>Sequoia National Park</i>
        </div>
        <div className="lb-col s4">
          <img className="responsive-img" src={Yosemite} />
          <p><i className="pin fas fa-map-pin"></i> Nevada Falls</p>
          <i>Yosemite National Park</i>
        </div>
        <div className="lb-col s4">
          <img className="responsive-img" src={Cusco} />
          <p><i className="pin fas fa-map-pin"></i> Cusco, Peru</p>
        </div>
      </div>
    </div>
  )
}
