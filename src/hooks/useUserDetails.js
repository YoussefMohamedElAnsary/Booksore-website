import { useEffect, useState } from "react";

export default function useUserDetails(){
    
    const [u,setU] = useState("");
    useEffect(()=>{
        let user = localStorage.getItem("BookStoreUser")
        if (user !== null){
            user =  JSON.parse(user)
            setU(user)
        }
    },[])

    return [u];
}