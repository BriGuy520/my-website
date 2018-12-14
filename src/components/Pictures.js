import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';

class Pictures extends Component {

  componentDidMount(){
    this.props.fetchPhotos();
  }
 

  render(){

    const { photos } = this.props;
    
    return (
      <div>
         <h1>Photos</h1>
        <div>{photos.title}</div>
      </div>
       
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps, { fetchPhotos })(Pictures);

