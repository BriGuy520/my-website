import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
import BlogLikes from './BlogLikes';
import CommentForm from './CommentForm';


class ShowBlog extends Component {

  componentDidMount(){
    this.props.fetchBlog(this.props.match.params.id);
  }
  
  renderBlog(){
    let { title, image, body, author } = this.props.blog;

    return (
      <div className="ui raised segment container">
        <h1>{title}</h1>
        <h4>By {author}</h4>
        <div>
          <img className="blog-image" src={image} alt={title} />
          <p>{body}</p>
        </div>
        <div>
          <BlogLikes blog={this.props.blog} />
        </div>
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
      <div className="container">
        {this.renderBlog()}
        <CommentForm comment={this.props.blog}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 return { blog: state.blogs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);