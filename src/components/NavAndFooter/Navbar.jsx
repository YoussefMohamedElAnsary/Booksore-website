import './NavAndFooter.css';
import logo from "../../components/assets/logo.png"
import search from "../../components/assets/MagnifyingGlass.svg"
import cart from "../../components/assets/ShoppingCartSimple.svg"
import { Link } from 'react-router-dom';
import LoginLogoutComp from '../Homepage/LoginLogoutComp';
import NavAdmin from './NavAdmin';
import useIsAdmin from '../../hooks/useIsAdmin';

const Navbar = () => {
const isAdmin = useIsAdmin();

    return (
        isAdmin? <NavAdmin/>:(<div className="Nav_container md:text-md text-xs">
            <div className="Logo">
                <img src={logo} className="logo"/>
            </div>
            <div className="Nav_items_container">
                <div className="Nav_items whitespace-nowrap">
                    <Link to='/home' className='Nav_items whitespace-nowrap'>Home</Link>
                </div>
                <div className="Nav_items whitespace-nowrap">
                    <Link to='/book-cat' className='Nav_items whitespace-nowrap'>Genre</Link>
                </div>
                <div className="Nav_items">
                    <Link to='/previous-orders' className='Nav_items whitespace-nowrap'>My Orders</Link>
                </div>
            </div>
            <div className="Nav_icons_container">
                <div className="Nav_icons">
                    <a href=""><img src={search} /></a>
                </div>
                <div className="Nav_icons">
                <Link to='/cart'><img src={cart} /></Link>
                </div>
                    <LoginLogoutComp/>
            </div>
        </div>)
    )
}
export default Navbar