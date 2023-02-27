import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
// import Parser from 'html-react-parser';
import BlogLikes from './BlogLikes';
import CommentForm from './CommentForm';
import marked from 'marked';
import axios from 'axios';
import DOMPurify from 'dompurify';


class ShowBlog extends Component {

  state = {
    content: '',
  }

  componentDidMount(){
    
    this.props.fetchBlog(this.props.match.params.id);

  }
  
  renderBlog(){

    console.log(this.props.blog);

    let {image, post, author, datePosted, description } = this.props.blog;

    axios.get(`/content/posts/${post}`)
    .then((res) => res.data)
    .then(content => {

      console.log(typeof content);
      const htmlContent = marked(content);
      const sanitizedHTML = DOMPurify.sanitize(htmlContent);

      this.setState({ content: sanitizedHTML });
    })
      
    return (
      <div className="ui container blog">
        <h1>Blog</h1>
        <h4>By {author}</h4>
        <span>{new Date(datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</span>
        <div>
          <img className="blog-image" src={`/content/images/${image}`} alt={image} style={{"width": "100%", "height": "100%"}} />
          <h3 className="blog-description"><i>{description}</i></h3>
          <p className="blog-body">{post}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
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