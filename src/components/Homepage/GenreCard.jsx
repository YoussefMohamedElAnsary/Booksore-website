/* eslint-disable react/prop-types */
import genre from"../AdminGenre_save/Genre_txt"
import React from 'react';
import './GenreCard.css';
import catePic from '../../components/assets/horrorCat.png';
const GenreCard=({genre}) =>{


  return (
    <div className='genrecardd'>   
    {/* <img className="imggenre"src={picc} alt="" /> */}
    <h3 className="genreNameCard">{genre.name}</h3>
    {/* <img src={catePic} alt="" /> */}
    </div>
);
}
export default GenreCard;