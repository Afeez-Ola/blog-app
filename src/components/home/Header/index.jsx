import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <header className='home_header'>
   <h2>Inc. This Morning</h2>
   <h1>
    <span>
     "<span>Blog</span>"
    </span>
   </h1>
   <p>
    Awesome place to make oneself <br /> productive and entertained through
    daily updates.
   </p>
   <button><Link to={"/new"} className='new_blog'>New Blog</Link></button>
  </header>
 );
};

export default Header;
