import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';

const Dashboard = () => {
  return (
    <div>
      <BlogList />
      <div>
        <Link to="/blogs/new">
          Create New Blog
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;