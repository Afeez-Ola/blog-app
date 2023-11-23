import React from 'react';
import emptyImage from '../../../../public/asset/13525-empty.gif';
import "./styles.css"

const EmptyList = () => {
 return (
  <div className='emptyList_wrapper'>
   <img src={emptyImage} alt='empty Image' />
  </div>
 );
};

export default EmptyList;
