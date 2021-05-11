import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

const Insta = ({...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(props.instaToken);
    tokenProp.current = props.instaToken;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.instaToken}`)
                .then((resp) => {
                    console.log(resp.data.data)
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
      <div className="insta-div">
        <h3>Instagram</h3>
        <div className="feed-div">
          {feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </div>
      </div>
    );
}

export default Insta;
