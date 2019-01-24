import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


class ShowBlog extends Component {

  componentDidMount(){
    this.props.fetchBlog(this.props.match.params.id);
  }
  
  renderBlog(){
    let { title, image, body, author } = this.props.blog;

    return (
      <div>
        <h1>{title}</h1>
        <h4>By {author}</h4>
        <img src={image} alt={title} />
        <p>{body}</p>
      </div>
    )
  }

  render(){  
    
    
    if(!this.props.blog){
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        {this.renderBlog()}
        <CommentForm comment={this.props.blog}/>
        <CommentList blogOwnership={this.props.blog}/>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 return { blog: state.blogs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);