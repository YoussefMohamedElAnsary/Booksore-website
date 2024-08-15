import './SignupLogin.css'
import Title from "../../components/assets/title.png";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { register } from '../../controller/UserController';
import {useState} from 'react'

const Signup = () => {

    const navigator = useNavigate()
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[address,setAddress] = useState("")
    const[phone,setPhone] = useState("")

    const onUsernameChange = event => {
        setUsername(event.target.value);
     };
     const onPasswordChange = event => {
        setPassword(event.target.value);
     };
     const onAddressChange = event => {
        setAddress(event.target.value);
     };
     const onPhoneChange = event => {
        setPhone(event.target.value);
     };

    return (
        <div className='backgrounddiv'>
             <div className='booktown_title'>
                <img src={Title} />
            </div>
            <div className='containerr'>
                <div className='header'>
                    Sign up
                </div>
                <div className='username'>
                    <input className="inputSignUp" type="text" placeholder="Username" value={username} onChange={onUsernameChange}/>
                </div>
                <div className='password'>
                    <input className="inputSignUp" type="text" placeholder="Password" value={password} onChange={onPasswordChange} />
                </div>
                <div className='address'>
                <input className="inputSignUp" type="text" placeholder="Address" value={address} onChange={onAddressChange}/>
                </div>
                <div className='phone'>
                    <input className="inputSignUp" type="text" placeholder="Phone number" value={phone} onChange={onPhoneChange} />
                </div>
                <div className='signin_container'>
                    Already have an account?
                    <Link to='/login' className='signin_link'>Sign in</Link>
                </div>
                <div className='submit_registeration_login'>
                    <button type="submit" className="Submit" onClick={()=>register({username,password,address,phone},navigator)}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
