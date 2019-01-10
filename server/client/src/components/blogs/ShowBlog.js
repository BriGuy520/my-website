import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';


class ShowBlog extends Component {

  componentDidMount(){
    this.props.fetchBlog();
  }

  render(){
    return (
      <div>
        ShowBlog
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 console.log(state);
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);