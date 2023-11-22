import React from 'react';

const BlogItem = (props) => {
 return (
  <div key={props.id} className='blogItem_wrapper'>
   <h1>Blog Item</h1>
   <p>{props.blog}</p>
  </div>
 );
};

export default BlogItem;
