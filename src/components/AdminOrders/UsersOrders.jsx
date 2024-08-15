import "./userorder.css";
import { useState } from "react";
import OrderItem from "../../components/UserOrders/OrderItem.jsx";
// import Deliverydetails from './Deliverydetails ';
import arrow from "../../components/assets/Vector 2.png";

import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  cancelOrder,
  getPendingOrders,
} from "../../controller/OrderController";
import useUserDetails from "../../hooks/useUserDetails";
const UsersOrders = () => {
  const [user] = useUserDetails();
  const queryClient = useQueryClient();
  const { data: orderData } = useQuery({
    queryFn: () => getPendingOrders("Pending Approval"),
    queryKey: [`order ${user.id}`],
  });

  const rejectOrderMutation = useMutation({
    mutationFn: (IDs) =>{ console.log(IDs); cancelOrder(IDs.oid, IDs.uid)},
    onSuccess: () => queryClient.invalidateQueries([`order ${user.id}`]),
  });

  // const [delivery, setdelvirydata] = useState([
  //   {order_id:,shipping:'', Address:'', Status:''} ,

  // ]);

  return (
    <div>
      {orderData?.map((o) => {
        return (
          <div key={o.id} className="orrder">
            <div className="orrderdetails">
              <div className="orderitemsandDelivery">
                <div key={o.id} className="item">
                  {" "}
                  <OrderItem
                    items={{
                      order_id: o.id,
                      username: o.user.username,
                      price: o.payment.payment_amount,
                    }}
                  />
                </div>
                <div className="vline"></div>

                <div className="Deliveryinfo">
                  <div className="delinfo">
                    {" "}
                    <span className="mark"> Delivery shipping: </span>{" "}
                    <span className="mark2"> 50 EGY </span> <br />{" "}
                  </div>
                  <div className="delinfo">
                    {" "}
                    <span className="mark"> Address: </span>{" "}
                    <span className="mark2"> Cairo-Naser city </span> <br />{" "}
                  </div>
                  <div className="delinfoo">
                    {" "}
                    <span className="mark"> Status: </span>{" "}
                    <span className="mark2"> pending </span>{" "}
                  </div>
                </div>
              </div>
              <button className="Acceptbutton" type="button">
                <span> Accept </span>
              </button>
              <button
                className="Rejectbutton"
                type="button"
                onClick={() => rejectOrderMutation.mutate({ oid: o.id, uid: o.user.id })}
              >
                <span> Reject </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UsersOrders;
