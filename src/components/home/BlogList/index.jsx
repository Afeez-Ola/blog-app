import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
 return (
  <div className='blogList_wrapper'>
   {blogs.map((blog) => (
    <BlogItem blog={blog} key={blog.id}></BlogItem>
   ))}
  </div>
 );
};

export default BlogList;
