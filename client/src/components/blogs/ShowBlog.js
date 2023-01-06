import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
import Parser from 'html-react-parser';
import BlogLikes from './BlogLikes';
import CommentForm from './CommentForm';


class ShowBlog extends Component {

  componentDidMount(){
    this.props.fetchBlog(this.props.match.params.id);
  }
  
  renderBlog(){
    let { title, image, body, author, datePosted, description } = this.props.blog;

    return (
      <div className="ui raised segment container">
        <h1>{title}</h1>
        <h4>By {author}</h4>
        <span>{new Date(datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</span>
        <div>
          <img className="blog-image" src={image} alt={title} style={{"width": "100%", "height": "100%"}} />
          <h3 className="blog-description"><i>{description}</i></h3>
          <p className="blog-body">{Parser(body)}</p>
        </div>
        <div className="likes">
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