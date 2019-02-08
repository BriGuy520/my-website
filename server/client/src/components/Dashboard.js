import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';

const Dashboard = () => {
  return (
    <div>
      <BlogList />
      <div className="add-blog">
        <Link to="/blog/new" className="circular ui icon button large blue">
          <i className="plus icon"></i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;