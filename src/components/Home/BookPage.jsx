import BackButtonWhite from '../BackButton/BackButtonWhite';
import Footer from '../NavAndFooter/Footer';
import Navbar from '../NavAndFooter/Navbar';
import { useState } from 'react';
import Book from './Book';
import './BookPage.css';
import ReviewsProp from '../PropsAndComps/ReviewsProp';
import star from '../../components/assets/star.svg';
import {  useParams } from 'react-router-dom';
import BookNotFound from '../Home/BookNotFound';
import { getBook } from '../../controller/BooksController';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getBooks } from '../../controller/BooksController.ts';
import { getReviews, addReview } from '../../controller/ReviewsController.ts';
import '../../components/PropsAndComps/StarRatingAndReview.css';
import { FaStar } from 'react-icons/fa';
import useUserDetails from '../../hooks/useUserDetails.js';
import { addToCart } from '../../controller/UserController.ts';

const BookPage = () => {
    const [user] = useUserDetails();
    const [reviewText, setReviewText] = useState('');
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const queryClient = useQueryClient();
    const stars = Array(5).fill(0);
    const colors = {
        orange: '#ffd400',
        grey: '#a9a9a9',
    };

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const { bookid } = useParams();
    const { data: bookDetails } = useQuery({
        queryFn: () => getBook(bookid),
        queryKey: [`book ${bookid}`],
    });
    console.log(bookDetails)
    const { data: bookData } = useQuery({
        queryFn: getBooks,
        queryKey: ['books'],
    });

    const {data:reviewData} = useQuery({
        queryFn: () => getReviews(bookid),
        queryKey: [`reviews ${bookid}`],
    });

    const addReviewMutation  = useMutation(
        {mutationFn:(review) => addReview(review, bookid, user.id),
            onSuccess: ()=>queryClient.invalidateQueries([`reviews ${bookid}`])
        
        });

        const addToCartMutation  = useMutation(
            {mutationFn:(uid) => addToCart(uid,{book_id:bookid,quantity:1}),
             onSuccess: ()=>queryClient.invalidateQueries([`cart ${user.id}`])
            
            });


    const specificBook = bookDetails;

    if (!specificBook) {
        return <div><BookNotFound /></div>;
    }

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };
    const handleReviewSubmit = async () => {
        const review = {
            review_content: reviewText,
            rating: currentValue,
        };
        addReviewMutation.mutate(review)
    };


    return (
        <div>
            <Navbar />
            <div className='book_page_main_container'>
                <div className='book_page_secondary_container'>
                    <div className='book_page_details_user'>
                        <div className='book_page_title_author'>
                            <span className='title_user'>{specificBook.book_name}</span>
                            <span className='author_user'>{specificBook.author.author_name}</span>
                        </div>
                        <div className='book_page_genre'>
                            Genre: {specificBook.genre.name}
                        </div>
                        <div className='book_page_desc'>
                            {specificBook.description}
                        </div>
                        <div className='book_page_price'>
                            PRICE: <span className='book_page_price_text'>{specificBook.price}</span> EGY
                        </div>
                        <div className='book_page_user_buttons'>
                            <button onClick={() => {
                                console.log(addToCartMutation.mutate(user.id))
                                }} className="add_cart">Add to cart</button>
                        </div>
                    </div>
                    <div className='book_page_cover_cont_user'>
                        <img src={specificBook.image_url} className='img_cont' />
                        <div className='rectangle_user'>
                            <div className='back_button_container'>
                                <BackButtonWhite />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom_page_author_cont'>
                    <div className='author_desc_cont'>
                        <div className='about_author'>
                            <span className='subtitle_cont'>
                                About author:
                            </span>
                            <span className='author_name_desc'>
                                {specificBook.author.author_name}
                            </span>
                        </div>
                        <div className='desc_cont'>
                        {specificBook.author.author_description}
                        </div>
                    </div>
                    <div className='book_recommendations overflow-auto'>
                        {bookData?.map((book) => { return (<Book key={book.id} book={book} className='book_cont' />) })}
                    </div>
                </div>
                <div className='reviews_title_rating_sales_cont'>
                    <span className='subtitle_cont'>
                        Reviews & Feed Back
                    </span>
                    <div className='sales_rating_main_cont'>
                        <span className='sales_rating_cont'>
                            Sales: {specificBook.num_sales}
                        </span>
                        <span className='sales_rating_cont'>
                            Rating:
                        </span>
                        <div className='book_rating_cont'>
                            <div className='book_star_cont'>
                                <img src={star} />
                            </div>
                            <span className='book_rating_num'>
                                {specificBook.rates}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='reviews_cont'>
                    {reviewData?.map((review) => { return (<ReviewsProp key={review.review_id} review={review} />) })}
                </div>
                <div>
                    <div className="stars_review_input_container">
                        <div className="stars">
                            <span className="subtitle_rate_book">Rate this book:</span>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                            marginRight: 1,
                                            cursor: "pointer"
                                        }}
                                    />
                                )
                            })}
                        </div>
                        <textarea placeholder="What's your experience?" className="reviewBoxInput" value={reviewText} onChange={handleReviewTextChange} />
                        <button type="submit" className="submitRatingReview" onClick={handleReviewSubmit}>
                            Submit
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookPage