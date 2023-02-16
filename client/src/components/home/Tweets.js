import React, { Component } from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';


class Tweets extends Component {

  render(){
    return (
      <div className="tweets">
        <div className="twitter-section">
          <div className="follow-button">
            <TwitterFollowButton
                screenName={'briTheDevGuy'}
                options={{ size: 'large'}}
            />
          </div>
          <div className="twitter-timeline">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="briTheDevGuy"
              noHeader
              options={{height: 500 }}
              autoWidth
              noScrollbar
            />
          </div>
        </div>
        <div className="tweets-copy">
          <h1>Tweets</h1>
          <p>
            Check out my barely used Twitter! 
          </p>
          
        </div>
      </div>
    )
  }
}

export default Tweets;