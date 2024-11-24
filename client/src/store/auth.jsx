import { Children, createContext, useContext, useState ,useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
        const [token,setToken] = useState(localStorage.getItem("token"));
        const [user, setUser] = useState([]);
        const [services, setServices] = useState([]);

    const storeTokenInLS=(serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    };
// to tackeel logout
let isLoggedIn = !!token;
    console.log("isLoggedIn",isLoggedIn);
    
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    };


// function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  // get services from data
  const getServices = async () =>{
    try {
      const response = await fetch("http://localhost:3000/api/data/service",{
        method: "GET",
      });

      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error ${error}`);
    } 
  };

  useEffect(() => {
    getServices();
    // userAuthentication();
  }, []);


    return (
    <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of provider");
    }
    return AuthContextValue;
};