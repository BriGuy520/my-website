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
      const response = await axios.get(`/content/posts/${this.props.blog.post}`);
      const mdContent = response.data;

      const { data, content } = matter(mdContent);
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

    let {image, author, datePosted } = this.props.blog;
      
    return (
      <div className="ui container blog">
        <h1>{this.state.postTitle}</h1>
        <h3 className="blog-description"><i>{this.state.postDescription}</i></h3>
        <div>
          <img className="blog-image" src={`/content/images/${image}`} alt={image} style={{"width": "100%", "height": "100%"}} />
          <h4>By {author}</h4>
          <span>{new Date(datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</span>
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