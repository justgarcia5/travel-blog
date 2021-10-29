import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Feed from './Feed'

const Insta = ({ ...props }) => {
  const [feeds, setFeedsData] = useState([])
  const tokenProp = useRef(props.instaToken);
  tokenProp.current = props.instaToken;
  const [visible, setIsVisible] = useState(true);

  useEffect(() => {
    let cancel = false;

    async function fetchInstagramPost() {
      try {
        axios
          .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.instaToken}`)
          .then((resp) => {
            if(cancel) return;
            setFeedsData(resp.data.data);
            setIsVisible(false);
          })
      } catch (err) {
        console.log('error', err);
      }
    }

    fetchInstagramPost();

    return () => cancel = true;
  }, [props.limit])

  return (
    <div className="insta-div">
      <h1>Instagram  <FontAwesomeIcon icon={['fab', 'instagram']} className="instagram" /></h1>
      <div className="feed-div">
        {feeds.map((feed) => (
          <Feed key={feed.id} feed={feed} />
        ))}
      </div>
    </div>
  );
}

export default Insta;
