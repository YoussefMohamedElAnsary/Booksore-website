import './Orders.css';
import Navbar from "../NavAndFooter/Navbar";
import Footer from '../NavAndFooter/Footer';
import currentordersframe from '../../components/assets/Frame53.png';
import Previousordersframe from '../../components/assets/Frame 59.png';
import Currentorders from './Currentorders';
import Previous_orders from './Previousorders';
const Orders =() =>{
   
return(
    <div>
        <Navbar/>

    <div className="currentorders">

        <div className='currentordersframe'> <img src={currentordersframe}/> </div>

            <Currentorders/>

            <div className='Previousordersframe'> <img src={Previousordersframe}/> </div>
            <Previous_orders/>
            </div>

                <Footer/>
        </div>

    
    );
}
export default Orders;