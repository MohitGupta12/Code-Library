"use client";
import  { useState } from "react";
import axios from "axios";

const getUser = async () => {
    const [user, setUser] = useState({});
    const userData = await axios("/api/users/me");
    setUser(userData.data.user);
    console.log(user);
    // return 0;
    return {user, setUser};
}

export default getUser