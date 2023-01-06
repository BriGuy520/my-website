import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';
import '../styles/Pictures.css';

class Pictures extends Component {

  
  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    const photoList = this.props.photos.map(photo => {
       return <img key={photo.id} alt={photo.description} src={`${photo.urls.small}`} />
    });
    
    return (
      <div className="container">
         <div className='photos'>
          {photoList}
         </div>
      </div>
       
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps, { fetchPhotos })(Pictures);

