import React from 'react';

const SearchBar = (props) => {
 return (
  <div className='searchBar_wrapper'>
   <form>
    <input type='text' onChange={props.handleSearch} placeholder='Search by Category' value={props.value} />
   </form>
  </div>
 );
};

export default SearchBar;
