import Navbar from "../NavAndFooter/Navbar";
import Footer from '../NavAndFooter/Footer';
import './AdminBooks.css';
import { getBooks } from "../../controller/BooksController.ts"
import { useQuery } from "react-query";
import AdminbooksRow from "./AdminbooksRow.jsx";
import useIsAdmin from "../../hooks/useIsAdmin.js";
import {Link} from 'react-router-dom'
const AdminBooks = () => {
    const isAdmin = useIsAdmin();

    const { data: bookData } = useQuery({
        queryFn: getBooks,
        queryKey: ["books"]
    });

    if (!isAdmin) {
        return (<div>YOU CANNOT ACCESS ME :DDDDD</div>)
    }
    return (
        <>
            <Navbar />
            <div className="AdminBookPage">
                <h3 className="PageTitle">Available Books</h3>
                <div className="BookList">
                    <table className="bookTable">
                        <tbody>
                            {bookData?.map((book) => { return (<AdminbooksRow key={book.id} book={book} />) })}
                        </tbody>
                    </table>
                </div>
                <div className="NewButtonCont">
                    <Link to='/admin-addbook' className="NewButton" >Add new books</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default AdminBooks;