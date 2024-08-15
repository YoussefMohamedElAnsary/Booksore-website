/* eslint-disable react/prop-types */
import './Book.css';
import {Link} from 'react-router-dom'
import('../../interfaces/Books')

const Book = ({book}) => {


  return (
    <div className='book_cont '>
      <Link to={`/book/${book.id}`}>
        <div className='book_cover' >
            <img src={book.image_url} className='book_cover_img'/>
        </div>
      </Link>
        <h3 className="book_title">{book.book_name}</h3>
        <div className="author_price_container">
          <span className="author text-black whitespace-nowrap">{book.author.name}</span>
          <div className='price_currency_cont'>
              <span className="book_price_book">{book.price}</span>
              <span className='currency_book'>EGP</span>
          </div>
        </div>
    </div>
  );
}

export default Book;