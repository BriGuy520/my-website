import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../actions';

class BlogList extends Component {

  
  async componentDidMount(){
    await this.props.fetchBlogs();
  }
  
  renderBlogs(){

    
    return this.props.blogs.reverse().map(blog => {

      if(!blog._doc){
        return <div></div>;
      }
      
      const {_id, datePosted, title, description, author, likes, comments } = blog._doc;
      const { image } = blog;

      console.log(blog._doc);

      let blogTitle;
      let dataURI;

      if(title){
        blogTitle = title.toLowerCase().replace(/ /g, "-");
      }

      if (blog._doc.image.includes('.jpeg') || blog._doc.image.includes('.jpg')) {
        dataURI = `data:image/jpeg;`;
      } else if (blog._doc.image.includes(".png")) {
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
              <div className="blog-icons">
                <span>
                  <i className="comments outline icon"></i>{comments}
                </span>
                <span>
                  <i className="thumbs up outline icon"></i>{likes}
                </span>
              </div>
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