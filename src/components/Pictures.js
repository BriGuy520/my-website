import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class Pictures extends Component {
 
  componentDidMount(){
    console.log(this.props.getPhotos());
  }

  render(){
    return (
      <div>Photos</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos }
}

export default connect(mapStateToProps, { getPhotos })(Pictures);
