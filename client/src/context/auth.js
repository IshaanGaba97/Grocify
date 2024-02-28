import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    //default axios
    axios.defaults.headers.common["Authorization"] = auth?.token;
    
    // this will store the user info from local storage
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token:parseData.token,
            })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook 
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }