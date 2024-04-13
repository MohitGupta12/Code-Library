import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const getIsLoggedInFromCookies = () => {
      const isLoggedInCookie = Cookies.get('isLoggedIn');
      console.log(isLoggedInCookie);
        setUser(isLoggedInCookie === 'true');
      
    };

    getIsLoggedInFromCookies();
    console.log(user);

  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {console.log("in body of context")}
      {children}
    </UserContext.Provider>
  );
}
