// import { useLocation } from "react-router-dom";
import Navbar from "../NavAndFooter/Navbar";
import Footer from "../NavAndFooter/Footer";
import React from "react";
import './delivery.css';
import useUserDetails from "../../hooks/useUserDetails";
import { useQuery,useMutation, useQueryClient } from "react-query";
import { getCart } from "../../controller/UserController";
import { useEffect,useState } from "react";
import { makeOrder } from "../../controller/OrderController";
const DeliveryForm = () => {

  const queryClient = useQueryClient();
  const [user] = useUserDetails()
  const [deliveryData, setDeliveryData] = React.useState({
    address: user.address,
    city: "",
    buildingno: "",
    phoneno: user.phone,
    comment: ""
  });
  const deliveryAmount = 50;

  const [totalAmount,setTotalAmount] = useState(0);
  const [cartID,setCartID] = useState(0);


  const {data:cartData} = useQuery({
    queryFn:()=> getCart(user.id),
    queryKey: [`cart ${user.id}`]
  });
  const makeOrderMutation  = useMutation(
    {mutationFn:(Params) => {console.log(Params); makeOrder(Params.uid,Params.pm,Params.books,{user_address:Params.address, user_city:Params.city, user_buildingno: Params.building, user_phone: Params.phone})},
        onSuccess: ()=>queryClient.invalidateQueries([`order ${user.id}`])
    
    });

  function handleChange(event) {
    const { name, value } = event.target;
    setDeliveryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
console.log(cartData)
  function handleSubmit(event) {
    event.preventDefault();
    if (
        deliveryData.address.trim() !== "" &&
        deliveryData.buildingno.trim() !== "" &&   deliveryData.city.trim() !== "" &&
        deliveryData.phoneno.trim() !== ""
      ) {
        let bookList = []
        cartData.forEach(cart =>{
          
          bookList.push({book_id:cart.book.id,quantity:cart.quantity})
        })
        makeOrderMutation.mutate({uid:user.id,pm:"Cash on Delivery",books:bookList,address:deliveryData.address,city:deliveryData.city,building:deliveryData.buildingno,phone:deliveryData.phoneno})
      } else {
        console.log("Data required");
        return;
      }
    }
    useEffect(()=>{
      let sum = 0
      cartData?.forEach(cart=>{
        sum +=cart.book.price;
      }
      )
      setTotalAmount(sum)
  
    },[cartData])
    return (
      <div>
        <Navbar/>
      <div >
        <div className="delform">
        <div className="myform">
          <div>
            <h2 className="cashOnDel">Cash on Delivery</h2>
          </div>
          <div className="form">
          <div className="left-form">
            <input
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="city"
              value={deliveryData.city}
            />
            <input
              type="text"
              placeholder="Building no."
              onChange={handleChange}
              name="buildingno"
              value={deliveryData.buildingno}
            />
            <input
              type="text"
              placeholder="Phone no."
              onChange={handleChange}
              name="phoneno"
              value={deliveryData.phoneno}
            />
          </div>
  
          <div className="right-form">
            <div className="AdrText">
            <input
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="address"
            value={deliveryData.address}
            required = "required"
          />
        </div>

      </div>
      </div>
    </div>
 
    </div>
    <div className="total">
    <div className="leftText">Order amount: {totalAmount} EGP</div>
    <div className="leftText">Delivery amount: {deliveryAmount} EGP</div>
    <div className="leftText">Total amount: {totalAmount + deliveryAmount} EGP</div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="904" height="4" viewBox="0 0 904 4" fill="none">
    <path d="M2 2H902" stroke="#9D8B70" strokeWidth="4" strokeLinecap="round"/>
    </svg>
    <div className="btn">
        <button type="submit" className="text-3xl" onClick={handleSubmit}>
          Confirm
        </button>
      </div>

  </div>
  <Footer/>
  </div>
);
};

export default DeliveryForm;