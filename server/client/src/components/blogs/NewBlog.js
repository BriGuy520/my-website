import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';

class NewBlog extends Component {
  state = { showBlogReview: false };

  renderContent(){
    if(this.state.showBlogReview){
      return <BlogFormReview onCancel={() => this.setState({ showBlogReview: false })} />
    }

    return <BlogForm onBlogSubmit={() => this.setState({ showBlogReview: true })} />
  }

  render(){
    return (
      <div>
       {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'blogForm'
})(NewBlog);