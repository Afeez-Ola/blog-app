// BlogForm.js
import React, { useState } from 'react';
import './styles.css';

const AddBlog = () => {
 const [formData, setFormData] = useState({
  title: '',
  category: '',
  description: '',
  coverImage: '',
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
 };

 return (
  <form onSubmit={handleSubmit}>
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
