// BlogForm.js
import React, { useState } from 'react';
import { blogList } from '../../config/data';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const AddBlog = () => {
 const navigate = useNavigate();

 const [formData, setFormData] = useState({
  id: blogList.length + 1,
  title: '',
  category: '',
  description: '',
  coverImage: '',
  subCategory: ['frontend', 'ui/ux', 'design'],
  authorName: 'John Doe',
  authorAvatar: '/asset/author.jpg',
  createdAt: 'June 03, 2021',
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  blogList.push(formData);
  console.log('Form submitted:', blogList);
  navigate('/');
 };

 return (
  <form onSubmit={handleSubmit}>
   <h3>New Blog</h3>
   <label>
    Title:
    <input
     type='text'
     name='title'
     value={formData.title}
     onChange={handleChange}
    />
   </label>

   <label>
    Category:
    <input
     type='text'
     name='category'
     value={formData.category}
     onChange={handleChange}
    />
   </label>

   <label>
    Description:
    <textarea
     name='description'
     value={formData.description}
     onChange={handleChange}
    />
   </label>

   <label>
    Cover Image URL:
    <input
     type='text'
     name='coverImage'
     value={formData.coverImage}
     onChange={handleChange}
    />
   </label>

   <button type='submit'>Submit</button>
  </form>
 );
};

export default AddBlog;
