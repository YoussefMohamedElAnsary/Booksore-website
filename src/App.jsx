import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import {Routes, Route, Navigate} from 'react-router-dom'
import DeliveryForm from "./components/Delivery/DeliveryForm.jsx"
import CategorizedBooks from "./components/CategorizedBooks/CategorizedBooks.jsx"
import BookPage from "./components/Home/BookPage.jsx"
import Statistics from "./components/Statistics/Statistics.jsx"
import Orders from "./components/UserOrders/Orders.jsx"
import AdminOrders from "./components/AdminOrders/AdminOrders.jsx"
import HomePage from "./components/Homepage/HomePage.jsx"
import BookNotFound from "./components/Home/BookNotFound.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Adminbooks from "./components/Admin_books/Adminbooks.jsx"
import EditBookPage from "./components/Home/EditBookPage.jsx"
import AddBookPage from "./components/Home/AddBookPage.jsx"
import AddGenre from "./components/AdminGenre_save/AddGenre.jsx"

function App() {

  return (
    

    // <><Routes>
    //   <Route path="/login" element={<Login/>}/>
    //   <Route path="/register" element={<Signup/>}/>
    // </Routes>
    // <div>
    //   {/*    <Statistics/>   */}
    //   {/* <AdminBooks/> */}

    //     {/* <Homepage/> */}

    //     <EditBookPage/>

    //     {/* <UsersOrders/> */}
   

    //     {/* <Cart/> */}
    // </div>
    //  </>

  <Routes>
    <Route path="/" element={<Navigate to="/register" />} index/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/book/:bookid" element={<BookPage/>}/>
    <Route path="/book" element={<BookNotFound/>}/>
    <Route path="/book-cat" element={<CategorizedBooks/>}/>
    <Route path="/delivery-form" element={<DeliveryForm/>}/>
    <Route path="/previous-orders" element={<Orders/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/admin-books" element={<Adminbooks/>}/>
    <Route path="/admin-orders" element={<AdminOrders/>}/>
    <Route path="/admin-statistics" element={<Statistics/>}/>
    <Route path="/admin-editbook/:bookid" element={<EditBookPage/>}/>
    <Route path="/admin-addbook" element={<AddBookPage/>}/>
    <Route path="/admin-addgenre" element={<AddGenre/>}/>

  </Routes>


  )
}
export default App
