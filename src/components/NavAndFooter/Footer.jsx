import './NavAndFooter.css';
import logo from "../../components/assets/logo.png"
import facebook from "../../components/assets/FacebookLogo.png"
import insta from "../../components/assets/InstagramLogo.png"
import twitter from "../../components/assets/Vector.png"
import { Link } from 'react-router-dom';

const Footer = () => {
        // const [emailAdr, setEmailAdr] = React.useState({
        //     emailAdress: ""
        //   });
        
        //   console.log(emailAdr);
        
        //   function handleChange(event) {
        //     const { name, value } = event.target;
        //     setEmailAdr((prevData) => ({
        //       ...prevData,
        //       [name]: value
        //     }));
        //   }
        
        //   function handleSubmit(event) {
        //     event.preventDefault();
        //     if (
        //         emailAdr.address.trim() !== "") {
        //         console.log("Successful");
        //       } else {
        //         console.log("Data required");
        //         return;
        //       }
        //     }
          
            return (
                <div className='bottom-0 left-0 h-fit'>
        <div className='footer'>
            <div className='footer-logo'>
                <img src = {logo} className='logo' alt = "Logo"/>
            </div>
            <div className='footer-links'>
                
            <div className="vertical-line"></div>
            <div className="center-footer">
                <div className="topcentre">
                  <p className='text-2xl'>Let's replace the email address with the trending books</p>
                  <p className='text-1xl'>Information on the latest releases, book reviews and confidential promotional codes</p>
                  <div className='bottomcentre'>
                <Link to='/book-cat' className='footerItems'>Genre</Link>
                <Link to='/delivery-form' className='footerItems'>Delivery</Link>
                <Link to='/previous-orders' className='footerItems'>Previous Orders</Link>
                </div>
                </div>
                </div>
               
                <div className="right-footer">
                <div className="footer-copyright">
                <input className='inputText'
                      type="text"
                      placeholder="Email Address"
                    //   onChange={handleChange}
                    //   name="email"
                    //   value={emailAdr.emailAdress}
                    />
                    </div> 
                <div>
                    <div className="right-text">
                    <h3>Check our social media:</h3>
                    
                <div className="footer-socialmedia-icons">
                    <div className="footer-icons">
                    <img src = {facebook} className='footerIcons' alt = "Logo"/>
                    </div>
                    <div className="footer-icons">
                    <img src = {insta} className='footerIcons' alt = "Logo"/>
                    </div>
                    <div className="footer-icons">
                    <img src = {twitter} className='footerIcons' alt = "Logo"/>
                    </div>
                    </div>
                    <h3>Contact us: +00|11223344</h3>
                </div>
                </div>
        
                </div> 
            </div>
        </div>
        </div>
    )
}

export default Footer;