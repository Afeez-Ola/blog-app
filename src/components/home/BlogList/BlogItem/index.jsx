import React from 'react';

const BlogItem = ({
 blog: { id, title, description, category, subCategory },
}) => {
 return (
  <div className='blogItem_wrapper'>
   <h1>Blog Item </h1>
  </div>
 );
};

export default BlogItem;
