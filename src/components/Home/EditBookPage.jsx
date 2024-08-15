import Navbar from '../NavAndFooter/Navbar';
import './EditBookPage.css';
import Footer from '../NavAndFooter/Footer';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { editBooks, deleteBooks, getBook } from '../../controller/BooksController';
import { useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';
import { getGenreByName } from '../../controller/GenreController';
import { getAuthorByName } from '../../controller/AuthorController';
import useIsAdmin from '../../hooks/useIsAdmin';


const EditBookPage = () => {

    const { bookid } = useParams();
    const isAdmin = useIsAdmin();

    

    const [book_name, setBookName] = useState('');
    const [description, setDesc] = useState('');
    const [num_sales, setNumSales] = useState('');
    const [rates, setRates] = useState('');
    const [price, setPrice] = useState('');
    const [quantity_in_stock, setStock] = useState('');
    const [image_url, setImage] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    const onBooknameChange = (event) => {
        setBookName(event.target.value);
    };
    const onDescChange = (event) => {
        setDesc(event.target.value);
    };
    const onNumSalesChange = (event) => {
        setNumSales(event.target.value);
    };
    const onRatesChange = (event) => {
        setRates(event.target.value);
    };
    const onPriceChange = (event) => {
        setPrice(event.target.value);
    };
    const onStockChange = (event) => {
        setStock(event.target.value);
    };
    const onImageChange = (event) => {
        setImage(event.target.value);
    };
    const onGenreChange = (event) => {
        setGenre(event.target.value);
    };
    const onAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const { data: bookDetails, isLoading, isError } = useQuery({
        queryFn: async () => {
            try {
                const response = await getBook(bookid);
                return response;
            } catch (error) {
                console.error('Error fetching book:', error);
                throw error;
            }
        },
        queryKey: [`book ${bookid}`],
    });

    useEffect(() => {
        if (bookDetails) {
            setBookName(bookDetails.book_name);
            setDesc(bookDetails.description);
            setNumSales(bookDetails.num_sales);
            setRates(bookDetails.rates);
            setPrice(bookDetails.price);
            setStock(bookDetails.quantity_in_stock);
            setImage(bookDetails.image_url);
            setGenre(bookDetails.genre.name);
            setAuthor(bookDetails.author.name);
        }
    }, [bookDetails]);

    const authorDetails  = useMutation({
        mutationFn:  async (author) => {
            try {
                const response = await getAuthorByName(author);
                return response;
            } catch (error) {
                console.error('Error fetching book:', error);
                throw error;
            }
        },
    });
    const genreQuery = useMutation({
        mutationFn: async (genre) => {
            try {
                const response = await getGenreByName(genre);
                return response;
            } catch (error) {
                console.error('Error fetching book:', error);
                throw error;
            }
        },
    });

    // console.log(bookDetails);
    // console.log(genreQuery);
    // console.log(authorDetails);





    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }
    if(!isAdmin){
        return(
            <div>
                YOU CANNOT ACCESS ME :DDDDDDDD
            </div>
        )
    }
    

    return (
        <div>
            <Navbar />
            <div className="book_page_cont">
                <div className="edit_book_card_cont">
                    <div className="book_page_head">Edit Book:</div>
                    <div className="book_cover_cont">
                        <img src={bookDetails.image_url} className="book_cover_page" />
                        <span className="edit_book_cover">Edit Cover</span>
                        <div className="img_url_txtbox">
                            <input
                                type="text"
                                className="input_book_details"
                                value={image_url}
                                onChange={onImageChange}
                            ></input>
                        </div>

                        <div className="edit_book_page_buttons_cont">
                            <button
                                type="submit"
                                className="edit_book_page_buttons"
                                onClick={async() => {
                                    const AuthorInfo = await authorDetails.mutateAsync(author)
                                    const GenreInfo = await genreQuery.mutateAsync(genre)

                                    console.log(AuthorInfo)
                                    editBooks({id:bookDetails.id, book_name, description, num_sales, rates, price, quantity_in_stock, image_url, genre:{id:GenreInfo.id,name:GenreInfo.name}, author:{author_id:AuthorInfo.id,name:AuthorInfo.name} })}}
                            >
                                Save Changes
                            </button>
                        </div>
                        <div className="edit_book_page_buttons_cont">
                            <button
                                type="submit"
                                className="edit_book_page_buttons"
                                onClick={() => deleteBooks(bookDetails.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="book_details_cont">
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">ID:</span>
                        <span className="input_book_details">{bookDetails.id}</span>
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Name:</span>
                        <input type="text" className="input_book_details" value={book_name} onChange={onBooknameChange} />
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Author:</span>
                        <input type="text" className="input_book_details" value={author} onChange={onAuthorChange} />
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Genre:</span>
                        <input type="text" className="input_book_details" value={genre} onChange={onGenreChange} />
                    </div>
                    <div className="book_desc_item_cont">
                        <span className="book_details_item_title">Description:</span>
                        <textarea
                            rows="4"
                            cols="50"
                            className="input_book_desc"
                            value={description}
                            onChange={onDescChange}
                        ></textarea>
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Price:</span>
                        <input type="text" className="input_book_details" value={price} onChange={onPriceChange} />
                        <span className="units">EGP</span>
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Rates:</span>
                        <input type="text" className="input_book_details" value={rates} onChange={onRatesChange} />
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Number of sales:</span>
                        <input
                            type="text"
                            className="input_book_details"
                            value={num_sales}
                            onChange={onNumSalesChange}
                        />
                        <span className="units">Copy</span>
                    </div>
                    <div className="book_details_item_cont">
                        <span className="book_details_item_title">Quantity in Stock:</span>
                        <input
                            type="text"
                            className="input_book_details"
                            value={quantity_in_stock}
                            onChange={onStockChange}
                        />
                        <span className="units">Copy</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditBookPage;
