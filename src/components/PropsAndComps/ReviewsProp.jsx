import './ReviewsProp.css'
import React from 'react';
import('../../interfaces/Review')

import star from '../../components/assets/star.svg'

const ReviewsProp = ({review}) => {

    return (
        <div className='review_main_cont'>
            <span className='username_cont'>{review.user.username}</span>
            <div className='likes_content_cont'>
                <p className='review_content'>{review.review_content}</p>
                <div className='rating_cont'>
                    <div className='star_cont'>
                        <img src={star}/>
                    </div>
                    <span className='rating_num'>{review.rating}</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default ReviewsProp;