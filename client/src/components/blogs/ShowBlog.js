import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
// import Parser from 'html-react-parser';
import BlogLikes from './BlogLikes';
import CommentForm from './CommentForm';
import marked from 'marked';
import matter from 'gray-matter';
import axios from 'axios';
import DOMPurify from 'dompurify';


class ShowBlog extends Component {

  state = {
    content: '',
    postTitle: '',
    postDescription: '',
  }

  async componentDidMount(){

    
    await this.props.fetchBlog(this.props.match.params.id);
    
    try {

      const mdContent = this.props.blog.postFile.data;

      const { data, content } = matter(Buffer.from(mdContent));

      const { title, description } = data;

      this.setState({ postTitle: title, postDescription: description })

      const htmlContent = marked.parse(content);
      const sanitizedHTML = DOMPurify.sanitize(htmlContent);
      this.setState({ content: sanitizedHTML });
    } catch (error) {
      console.log(error);
    }
  }
  
  renderBlog(){

    let { author, datePosted, image } = this.props.blog;

   let dataURI;

    if (image.includes('.jpeg') || image.includes('.jpg')) {
      dataURI = `data:image/jpeg;`;
    } else if (image.includes(".png")) {
      dataURI = `data:image/png;`;
    }
      
    return (
      <div className="ui container blog">
        <div className='blog-head'>
          <h1>{this.state.postTitle}</h1>
          <h3 className="blog-description"><i>{this.state.postDescription}</i></h3>
          <img className="blog-image" src={`${dataURI}base64,${Buffer.from(this.props.blog.imageFile.data).toString('base64')}`} alt={image} style={{"width": "100%", "height": "100%"}} />
        </div>
        <div className="blog-body">
          <p className="author">By {author}</p>
          <p className="post-date">{new Date(datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</p>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
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