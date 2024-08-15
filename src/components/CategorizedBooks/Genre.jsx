import './Genre.css';
import React from 'react';

const Genre = (props) => {
  const { genre } = props.genre;

  return (
    <div className='genrelistgenre'>   
        <span className='genrename'>{genre}</span>
    </div>
);
}

export default Genre;