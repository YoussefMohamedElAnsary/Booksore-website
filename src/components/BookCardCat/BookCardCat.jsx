import React from 'react';
import './BookCardCat.css';
import testbook from '../../components/assets/testbook.jpg';

const BookCardCat = (props) => {
    // const {Cover,NameBook,Authorname,BookPrice} = props.genre;
    return (
        // <div className="Card">
        //   <img className="bookcoverr"src={Cover} alt="sora" />
        //   <p className='BookName'>{NameBook}</p>
        //   <div className='authPrice'>
        //     <p className='authorname'>{Authorname}</p>
        //     <p className='Pegy'>{BookPrice}</p>
        //   </div>
        // </div>

         <div className="Card">
         <img className="bookcoverr"src={testbook} alt="sora" />
         <p className='BookName'>hate walo2aa</p>
         <div className='authPrice'>
           <p className='authorname'>sonia</p>
           <p className='Pegy'>0.5EGY</p>
         </div>
       </div>
    )
}
export default BookCardCat