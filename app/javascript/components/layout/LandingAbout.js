import React from 'react'

import Angela from '../../packs/images/profile.jpeg'

export default function LandingAbout() {
  return (
    <div className="landing_about_div">
      <div className="la-row">
        <div className="la-col s6">
          <img className="materialboxed" src={Angela} />
        </div>
        <div className="about_text_bg la-col s6">
          <h3>Something here</h3>
          <br/>
          <b><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></b>

          <b><p>Lobortis feugiat vivamus at augue eget arcu. Massa massa ultricies mi quis hendrerit dolor magna. Tempus urna et pharetra pharetra massa massa ultricies. Eu non diam phasellus vestibulum lorem sed risus. Commodo elit at imperdiet dui accumsan sit amet nulla. At urna condimentum mattis </p></b>
        </div>
      </div>
    </div>
  )
}
