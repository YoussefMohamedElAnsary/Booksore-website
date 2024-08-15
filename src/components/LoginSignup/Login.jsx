import './SignupLogin.css';
import Title from "../../components/assets/title.png";
import {Link} from 'react-router-dom'
import { getUsers, login } from '../../controller/UserController';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigator = useNavigate()
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const onUsernameChange = event => {
        setUsername(event.target.value);
     };
     const onPasswordChange = event => {
        setPassword(event.target.value);
     };
    useEffect(() => {
        getUsers().then(users => console.log(users)).catch(error => console.error(error));
    }, []);
    return (
        <div className='backgrounddiv'>

            <div className='booktown_title'>
                <img src={Title} className='title_img' />
            </div>

            <div className='containerr'>
                <div className='header'>
                    Sign in
                </div>
                <div className='welcome'>
                    Welcome
                </div>
                <div className='username'>
                    <input className='inputSignUp' type="text" placeholder="Username" value={username} onChange={onUsernameChange}/>
                </div>
                <div className='password'>
                    <input className='inputSignUp' type="text" placeholder="Password" value={password} onChange={onPasswordChange} />
                </div>
                <div className='forgot_password_remember_me'>
                    <a href='' className='forgot_password'>Forgot Password?</a>
                    <label className='checkbox_label'>
                        <input type="checkbox" name="remember_me" />Remember me
                    </label>
                </div>
                <div className='submit_registeration_login'>
                    <button type="submit" className="Submit" onClick={()=>{login({username,password},navigator)}}>Login</button>
                </div>
                <div className='signup_container'>
                </div>
                <div className="signup_line">
                    <div className='w-[25%] h-[1%] bg-white mx-3'>
                    </div>
                    <Link to='/register'>Sign Up</Link>
                    <div className='w-[25%] h-[1%] bg-white mx-3'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
