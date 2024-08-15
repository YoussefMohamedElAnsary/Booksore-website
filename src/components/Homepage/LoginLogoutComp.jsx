import { Link, useNavigate } from "react-router-dom";
import useUserDetails from "../../hooks/useUserDetails"
import {LogOut} from 'lucide-react'
export default function LoginLogoutComp() {
  
  const [user] = useUserDetails()
  const navigator = useNavigate();
  
  return (
    <div className="bg-[#efe3e1] p-4 rounded-xl whitespace-nowrap font-semibold text-sm flex justify-between items-center gap-2 relative" style={{ width: '15vw', height: '8vh', fontFamily: 'Inria Serif' }}>
        <p>{user && `Welcome, ${user.username}`}</p>
        <Link to="/login"><p>{!user && `Please Login!`}</p></Link>

        <div style={{fontSize:'0'}}>
            {user && <LogOut style={{ width: '1.5vw', height:'3vh', marginBottom:'50'}} className='cursor-pointer' onClick={()=>{localStorage.removeItem("BookStoreUser");
          navigator("/login")}}/>}
        </div>
    </div>
  )
}
