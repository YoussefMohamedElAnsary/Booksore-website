import Navbar from "../NavAndFooter/Navbar";
import image from "../../components/assets/icons8-add-image-96.png";
import "./EditBookPage.css";
import Footer from "../NavAndFooter/Footer";
import { useState } from "react";
import { addBook } from "../../controller/AdminController";
import { getGenreByName } from "../../controller/GenreController";
import { getAuthorByName } from "../../controller/AuthorController";
import { useMutation } from "react-query";

const AddBookPage = () => {
  const [book_name, setName] = useState("");
  const [image_url, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity_in_stock, setStock] = useState("");

  const onBooknameChange = (event) => {
    setName(event.target.value);
  };
  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const onGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const onDescChange = (event) => {
    setDesc(event.target.value);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };

  const onImageChange = (event) => {
    setImage(event.target.value);
  };
  const onStockChange = (event) => {
    setStock(event.target.value);
  };

  const authorDetails = useMutation({
    mutationFn: async (author) => {
      try {
        const response = await getAuthorByName(author);
        return response;
      } catch (error) {
        console.error("Error fetching book:", error);
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
        console.error("Error fetching book:", error);
        throw error;
      }
    },
  });

  console.log(genreQuery);
  console.log(authorDetails);

  return (
    <div>
      <Navbar />
      <div className="book_page_cont">
        <div className="edit_book_card_cont">
          <div className="book_page_head">Add Book:</div>
          <div className="book_cover_cont">
            <img src={image} className="add_book_cover_page" />
            <span className="edit_book_cover">Add Cover</span>
            <div className="img_url_txtbox">
              <input
                type="text"
                className="input_book_details_img"
                value={image_url}
                onChange={onImageChange}
              ></input>
            </div>
            <div className="edit_book_page_buttons_cont">
              <button
                type="submit"
                className="edit_book_page_buttons"
                onClick={async () => {
                  const AuthorInfo = await authorDetails.mutateAsync(author);
                  const GenreInfo = await genreQuery.mutateAsync(genre);
                  addBook(
                    {
                      book_name: book_name,
                      description: description,
                      price: price,
                      quantity_in_stock: quantity_in_stock,
                      image_url: image_url,
                    },
                    AuthorInfo.author_id,
                    GenreInfo.id
                  );
                }}
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
        <div className="book_details_cont">
          <div className="book_details_item_cont">
            <span className="book_details_item_title">Name:</span>
            <input
              type="text"
              className="input_book_details"
              value={book_name}
              onChange={onBooknameChange}
            ></input>
          </div>
          <div className="book_details_item_cont">
            <span className="book_details_item_title">Author:</span>
            <input
              type="text"
              className="input_book_details"
              value={author}
              onChange={onAuthorChange}
            ></input>
          </div>
          <div className="book_details_item_cont">
            <span className="book_details_item_title">Genre:</span>
            <input
              type="text"
              className="input_book_details"
              value={genre}
              onChange={onGenreChange}
            ></input>
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
            <input
              type="text"
              className="input_book_details"
              value={price}
              onChange={onPriceChange}
            ></input>
            <span className="units">EGP</span>
          </div>

          <div className="book_details_item_cont">
            <span className="book_details_item_title">Quantity in Stock:</span>
            <input
              type="text"
              className="input_book_details"
              value={quantity_in_stock}
              onChange={onStockChange}
            ></input>
            <span className="units">Copy</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBookPage;
