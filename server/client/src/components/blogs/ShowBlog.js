import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import axios from 'axios';


class ShowBlog extends Component {

  state = { likes: null };

  componentDidMount(){
    this.props.fetchBlog(this.props.match.params.id);
  }

  handleSubmit(event){
    event.PreventDefault();

    axios.post(`/api/blog/${this.props.blog.id}/like`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  renderBlog(){
    let { title, image, body, author, likes } = this.props.blog;

    return (
      <div className="ui raised segment container">
        <h1>{title}</h1>
        <h4>By {author}</h4>
        <div>
          <img className="blog-image" src={image} alt={title} />
          <p>{body}</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <span>
              <button>
                <i className="thumbs up outline icon"></i>
              </button>
              {likes}
            </span>
          </form>
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
        <CommentList blogOwnership={this.props.blog}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
 return { blog: state.blogs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);