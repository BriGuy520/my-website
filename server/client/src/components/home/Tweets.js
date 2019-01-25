import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/index';


class Tweets extends Component {

  componentDidMount(){
    this.props.fetchTweets();
  }

  render(){
    return (
      <div>Tweets</div>
    )
  }
}

const mapStateToProps = ({ tweets }) => {
  console.log(tweets);
}

export default connect(mapStateToProps, { fetchTweets })(Tweets);