"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AddButton} from '@/components';

const AddComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userId, setUserId] = useState("");
    const [data, setData] = useState({title: "",content: "", user: ""})


    useEffect(() => {
        const getUserData = async () => {
            const res = await axios.get("/api/user/me");
            setUserId(res.data.user._id);
        };
        getUserData();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userId);
      const newData = {
          title: data.title,
          desc: data.desc,
          content: data.content,
          user: userId
      };
      setData(newData)
      console.log(newData);
      await axios.post("/api/post", newData);
      setData({
          title: "",
          desc: "",
          content: "",
      });
    };

    const handleClickOnTextArea = () => {
      if(isOpen){
        setIsOpen(false);
      }
    }

    return (
      <div className="flex justify-start items-center flex-col w-screen h-screen bg-[#292c35]">
        <h1 className="text-3xl font-bold text-white mt-20 p-2">Add component</h1>
        <div className="flex__center flex-col flex-grow w-screen">
          <form className="flex-grow bg-green-600 w-4/5 p-4 ">
            <label className="text-white"> Title</label>
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              type="text" className="m-2 p-2 w-full rounded-lg" />

            <div className="bg-slate-100 p-4">
              <label className="text-black">Content</label>
              <div className="p-4 pl-0 flex flex-row" >
                <AddButton isOpen={isOpen} setIsOpen={setIsOpen} />
                <textarea
                value={data.content}
                style={{ minHeight: "100px", maxHeight: "425px",
                  resize: "none",
                }}
                onClick={handleClickOnTextArea}
                onChange={(e) => setData({ ...data, content: e.target.value })}
                className="m-2 p-2 w-full rounded-lg text-xl bg-slate-100" />
              </div>
              {/* <textarea
                value={data.content}
                cols="30"
                rows="10"
                style={{ minHeight: "256px", maxHeight: "425"}}
                onChange={(e) => setData({ ...data, content: e.target.value })}
                className="m-2 p-2 w-full rounded-lg" /> */}
            </div>

          </form>
          <button onClick={handleSubmit} className="m-2 p-2 w-fit rounded-lg bg-emerald-600">Add Component</button>
        </div>
      </div>
    );
};

export default AddComponent;
