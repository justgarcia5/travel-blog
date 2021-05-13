import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url } = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <div>
                    <video 
                        src={media_url} 
                        type="video/mp4" 
                        controls playsInline>
                    </video>
                    <hr/>
                    <p className="caption">{caption}</p>
                </div>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <div>
                    <img 
                        id={id} 
                        src={media_url} 
                        alt={caption} 
                    />
                    <hr/>
                    <p className="caption">{caption}</p>
                </div>
            );
            break;
        default:
            post = (
                <div>
                    <img 
                        id={id} 
                        src={media_url} 
                        alt={caption} 
                    />
                    <hr/>
                    <p className="caption">{caption}</p>
                </div>
            );
    }       

    return post
}

export default Feed;
