"use client";
import React from 'react'
import Link  from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";
const Navbar = ({loggedIn}) => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center bg-cyan-500 text-white p-2">
        <div>Logo</div>
        <div className="flex justify-between items-center">
        <Link href="/"> <div className="m-2 p-2">Home</div> </Link>
        <Link href="/library"><div className="m-2 p-2">Library</div></Link>
        <Link href="/my_component"><div className="m-2 p-2">My Components</div></Link>
        <Link href="/about_us"><div className="m-2 p-2">About Us</div></Link>
          <button onClick={logout} className="w-fit text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar