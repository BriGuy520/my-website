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
            The rumors are true, I am on Twitter. While I'm not the biggest fan of Twitter and feel it is not the best way to have public discourse, it does have its benefits. 
          </p>
          <p>
            It is a great way to keep up to date with the latest trends in the tech community as well as posting some of my own projects and content.
          </p>
          <p>
            If you like what you see and think that I have anything interesting to say or share, hit that follow button at the top of the feed. Thanks in advance.
          </p>
        </div>
      </div>
    )
  }
}

export default Tweets;