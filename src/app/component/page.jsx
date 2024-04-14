"use client";
import React from "react";
import getUser from "@/hooks/getUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const MyComponent = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "default",
    email: "default email",
    role: "default role",
  });
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get("/api/users/me");
      setUser(res.data.user);
      const postRes = await axios.get("/api/post");
      setPostsList(postRes.data);
    };
    getUserData();
  }, []);

  return (
    <div className="flex justify-start items-center flex-col w-screen bg-blue-600 h-[90vh]">
      <h1 className="text-3xl font-bold text-white">
        Welcome, {user.username}
      </h1>
      <div className="flex__center flex-col">
        <button
          onClick={() => {
            router.push("/component/add");
          }}
          className="m-2 p-2 w-fit rounded-lg bg-green-300"
        >
          Add Component
        </button>
        <div className="flex flex-col">
          <ul>
            {
              // filter the postsList to have only the posts created by the user
              // postsList.filter(post => post.user === user._id).map((post, index) => {
              //   return (
              //     <li>
              //       <div key={index} className="bg-teal-300 p-2 m-2 rounded-lg">
              //         <h1>{post.title}</h1>
              //         <p>{post.desc}</p>
              //         <p>{post.content}</p>
              //       </div>
              //     </li>
              //   )
              // })
            }
            {postsList
              .filter((post) => post.user === user._id)
              .map((post, index) => {
                return (
                  <li>
                    <div key={index} className="bg-teal-300 p-2 m-2 rounded-lg">
                      <h1>{post.title}</h1>
                      <p>{post.desc}</p>
                   
                    </div>
                    
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
