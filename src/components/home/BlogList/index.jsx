import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = (props) => {
 return (
  <div className='blogList_wrapper'>
   {props.blogs.map((blog) => {
    <BlogItem blog={blog} key={blog.id} />;
   })}
  </div>
 );
};

export default BlogList;
