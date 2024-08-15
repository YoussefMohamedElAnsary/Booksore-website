import './AdminBooks.css';
import('../../interfaces/Books')
import Trash from '../assets/Trash.png'
import { Link } from 'react-router-dom';
// AdminbooksRow.jsx
const AdminbooksRow = ({ book }) => {
    return (
      <tr>
        <th className="tableData">#{book.id}</th>
        <th className="tableData">{book.book_name}</th>
        <th className="tableData">Quantity: {book.quantity_in_stock}</th>
        <th className="tableData">{book.genre.name}</th>
        {/* Assuming 'author' is an object with 'author_name' property */}
        <th className="tableData">{book.author.author_name}</th>
        <th className="pic-text">
          <img className="tpic" src={Trash} alt="" />
          <Link to={`/admin-editbook/${book.id}`} className="etext">Edit</Link>
        </th>
      </tr>
    );
  };
  
  export default AdminbooksRow;
  