import "./CategorizedBooks.css";
import Navbar from "../NavAndFooter/Navbar";
import { useState } from "react";
import Footer from "../NavAndFooter/Footer";
import BackButton from "../BackButton/BackButton";
import Recymen from "../../components/assets/Rectangle33.png";
import Recshmal from "../../components/assets/Rectangle34.png";
import { getGenres } from "../../controller/GenreController";
import { useQuery, useMutation } from "react-query";
import { getBookByGenre } from "../../controller/BooksController";
import Book from "../Home/Book";
import { Link } from "react-router-dom";
const CategorizedBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [books, setBooks] = useState([]);
  const { data: genreData } = useQuery({
    queryFn: getGenres,
    queryKey: ["genres"],
  });

  const bookGenre = useMutation({
    mutationFn: async (genre) => {
      try {
        const response = await getBookByGenre(genre);
        setBooks(response);
        return response;
      } catch (error) {
        console.error("Error fetching book:", error);
        throw error;
      }
    },
  });

  const handleGenreChange = (event) => {
    const selectedGenreValue = event.target.value;
    setSelectedGenre(selectedGenreValue);

    if (selectedGenreValue) {
      bookGenre.mutate(selectedGenreValue);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <Link to="/home"><div className="BackButtonn">
        <BackButton />
      </div></Link>
      <div className="recymen">
        {" "}
        <img src={Recymen} />{" "}
      </div>
      <div className="recshmal">
        {" "}
        <img src={Recshmal} />{" "}
      </div>
      <div className="genrelist">
        <div className="ay7aga">
          <h3 className="listname">Genre</h3>
          <hr className="line" />
          {genreData?.map((genre) => (
            <div key={genre.id} className="mt-5 p-2 flex items-center gap-2">
              <label className=""> 
                {genre.name}
              </label>

                <input
                className="checkaya"
                  type="radio"
                  name="genree"
                  value={genre.name}
                  checked={selectedGenre === genre.name}
                  onChange={handleGenreChange}
                />{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="displaybooks">
        {books?.map((book) => {
          return (
            <div key={book.id} className="booksrow">
              <Book book={book} />
              {book.book_name}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default CategorizedBooks;
