import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../actions';

class BlogList extends Component {

  
  async componentDidMount(){
    await this.props.fetchBlogs();

    console.log(this.props.blogs);
  }
  
  renderBlogs(){

    return this.props.blogs.reverse().map(blog => {

      const {_id, datePosted, title, description, author, likes } = blog._doc;
      const { image } = blog;

      let blogTitle;
      let dataURI;

      if(title){
        blogTitle = title.toLowerCase().replace(/ /g, "-");
        console.log(image);
      }

      if (blog._doc.image.includes('.jpeg') || blog._doc.image.includes('.jpg')) {
        dataURI = `data:image/jpeg;`;
      } else if (blog._doc.image.includes(".png") === 'png') {
        dataURI = `data:image/png;`;
      }

      
      return (
        <div className="ui raised segment blog-card" key={_id}>
          <div className="content">
            <div className="header">
              <h2>{title}</h2>
              <h4>By {author}</h4>
              <span>{new Date(datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</span>
            </div>
            <div className="image">
              <img className="blog-image" alt={title} src={`${dataURI}base64,${Buffer.from(image).toString('base64')}`} />
            </div>
              <p>{description}</p>
            <div className="post-details">
              <button className="ui button"><Link to={`blog/${_id}/${blogTitle}`}>Read More</Link></button>
              <span>
                <i className="thumbs up outline icon"></i>{likes}
              </span>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="container blog-cards">
        {this.renderBlogs()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs: Object.values(blogs) };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);