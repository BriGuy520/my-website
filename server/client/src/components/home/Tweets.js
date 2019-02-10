import React, { Component } from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';


class Tweets extends Component {

  render(){
    return (
      <div className="tweets">
        <h1>Tweets</h1>
        <p>Yes, it is true. I am a member of the virtue signaling cess pool that is twitter. Follow me! Please, no politics.</p>
        
        <div className="follow-button">
          <TwitterFollowButton
              screenName={'briTheDevGuy'}
              options={{ size: 'large'}}
          />
        </div>
        <div className="centerContent">
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="briTheDevGuy"
              noHeader
              options={{height: 500 }}
              autoWidth
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tweets;