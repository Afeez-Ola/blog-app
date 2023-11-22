import React from 'react';
import './styles.css';

const BlogItem = ({
 blog: {
  id,
  title,
  description,
  createdAt,
  authorName,
  authorAvatar,
  category,
 },
}) => {
 return (
  <div className='blogItem_wrapper'>
   <h1>Blog Item </h1>
  </div>
 );
};

export default BlogItem;
