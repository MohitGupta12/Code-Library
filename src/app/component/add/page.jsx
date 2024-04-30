"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [userId, setUserId] = useState("");
    const [data, setData] = useState({title: "",desc: "",content: "", user: ""})


    useEffect(() => {
        const getUserData = async () => {
            const res = await axios.get("/api/user/me");
            setUserId(res.data.user._id);
        };
        getUserData();
    }, []);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
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
        })
    };

    return (
        <div className="flex justify-start items-center flex-col w-screen bg-purple-600 h-[90vh]">
            <h1 className="text-3xl font-bold text-white">Add component</h1>
            <div className="flex__center flex-col">
                <form>
                    <label className="text-white"> Title</label>
                    <input
                        value={data.title}
                        onChange = {(e) => setData({...data, title: e.target.value})}
                        type="text" className="m-2 p-2 w-full rounded-lg" />
                    <label className="text-white">Description</label>
                    <input
                        value = {data.desc}
                        onChange = {(e) => setData({...data, desc: e.target.value})}
                        type="text" className="m-2 p-2 w-full rounded-lg" />
                    <label className="text-white">Content</label>
                    <textarea
                        value = {data.content}
                        onChange = {(e) => setData({...data, content: e.target.value})}
                        className="m-2 p-2 w-full rounded-lg" />
                    <label className="text-white">Thumbnail</label>
                    <input
                        type="file"
                        className="m-2 p-2 w-full rounded-lg"
                        onChange={handleImageChange}
                    />
                    {selectedImage && (
                        <img src={selectedImage} alt="preview" className="w-90 h-60 rounded-lg border-black border-[2px]" />
                    )}
                </form>
                <button onClick={handleSubmit} className="m-2 p-2 w-fit rounded-lg bg-emerald-600">Add Component</button>
            </div>
        </div>
    );
};

export default AddComponent;
