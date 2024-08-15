import testbook from '../../components/assets/testbook.jpg';
import { useState } from 'react';
import Book from './Book';
import './Book.css'

const BookTest = () => {
  const [books, setBooks] = useState([
    { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: '250' }
  ]);

  return (
    <div className='home'>
      <Book book={books[0]} />
    </div>
  );
}

export default BookTest;