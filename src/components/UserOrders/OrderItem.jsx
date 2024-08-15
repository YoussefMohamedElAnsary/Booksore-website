import './OrderItem.css';
import React from 'react';

const OrderItem = (props) => {
  const {order_id, username, price} = props.items;

return(
    <div className='orderitem'>
        
             <h2 className="book_name flex gap-5">{`Order ID: ${order_id}`}</h2>
        <div className='qandp'>
                
            <div className='ayhaga'> <span>Username:  <span className=" pr-2"> {username} </span> </span> </div>  <br />
            <span> price: <span className=" pr-2"> {price} </span></span>

        </div>
            

    </div>
);
}
export default OrderItem;
