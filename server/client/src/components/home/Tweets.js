import React, { Component } from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';


class Tweets extends Component {

  render(){
    return (
      <div className="tweets">
        <h1>Tweets</h1>
        <p>Yes, it is true. I am a member of the virtue signaling cess pool that is twitter. Follow me! Please, no politics.</p>
        <TwitterFollowButton
          screenName={'briTheDevGuy'}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="briTheDevGuy"
          options={{height: 500}}
        />
      </div>
    )
  }
}

export default Tweets;