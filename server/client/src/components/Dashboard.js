import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';

const Dashboard = () => {
  return (
    <div>
      <BlogList />
      <div>
        <Link to="/blog/new">
          Create New Blog
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;