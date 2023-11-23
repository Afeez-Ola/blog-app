import React, { useState } from 'react';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from '../../config/data';
import BlogList from '../../components/home/BlogList';
import EmptyList from '../../components/common/EmptyList';

const Home = () => {
 const [blogs, setBlogs] = useState(blogList);
 const [searchValue, setSearchValue] = useState('');

 function handleSearch(e) {
  e.preventDefault();
  setSearchValue(e.target.value);
  setBlogs(
   blogList.filter((blog) =>
    blog.category.toLowerCase().includes(searchValue.toLowerCase().trim()),
   ),
  );
 }

 function clearSearch(e) {
  e.preventDefault();
  setBlogs(blogList);
  setSearchValue('');
 }

 function formSubmit(e) {
  handleSearch();
 }

 return (
  <div>
   <Header></Header>
   <SearchBar
    formSubmit={formSubmit}
    handleSearch={handleSearch}
    clearSearch={clearSearch}
    value={searchValue}
   ></SearchBar>
   {!blogs.length ? (
    <EmptyList></EmptyList>
   ) : (
    <BlogList blogs={blogs}></BlogList>
   )}
  </div>
 );
};

export default Home;
