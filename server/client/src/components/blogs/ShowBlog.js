import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
import Comment from './Comment';
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

    console.log(this.props.blog);

    return (
      <div>
        {this.renderBlog()}
        <Comment newComment={this.props.blog}/>
        <CommentList />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 return { blog: state.blogs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);