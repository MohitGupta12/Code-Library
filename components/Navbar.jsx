"use client";
import React from 'react'
import Link  from "next/link";
import axios from "axios";
import { useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import Cookies from 'js-cookie';
const Navbar = ({loggedIn}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const getIsLoggedInFromCookies = () => {
      const isLoggedInCookie = Cookies.get('isLoggedIn');
      console.log(isLoggedInCookie);
        setIsLoggedIn(isLoggedInCookie === 'true');
    };

    getIsLoggedInFromCookies();
}, []);
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/user/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ zIndex: 10, position: 'absolute' }}>
      <div className="flex justify-between items-center bg-cyan-500 w-screen text-white p-2">
        <div>Logo</div>
        <div className="flex justify-between items-center">
        <Link href="/"> <div className="m-2 p-2">Home</div> </Link>
        <Link href="/library"><div className="m-2 p-2">Library</div></Link>
        <Link href="/component"><div className="m-2 p-2">My Components</div></Link>
        <Link href="/about_us"><div className="m-2 p-2">About Us</div></Link>
          <button onClick={logout} className="w-fit text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar