import React from 'react';
import './styles.css';

const SearchBar = (props) => {
 return (
  <div className='searchBar_wrapper'>
   <form onSubmit={props.formSubmit}>
    <input
     type='text'
     onChange={props.handleSearch}
     placeholder='Search by Category'
     value={props.value}
    />
    {props.value && <span onClick={props.clearSearch}>X</span>}
    <button>Go</button>
   </form>
  </div>
 );
};

export default SearchBar;
