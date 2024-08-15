import { useEffect, useState } from "react";

export default function useIsAdmin() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("BookStoreUser"));
        
        if (user && user.username === 'Admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    return isAdmin;
}