"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

// ading dynamic input

const AddComponent = () => {
  const [inputs, setInputs] = useState([{ language: "", code: "" }]);
  const [data, setData] = useState({
    title: "",
    desc: "",
    content: [],
    user: "",
    imageId:""
  });
  const [imageId, setImageId] = useState("");
  const handleAddInput = () => {
    setInputs([...inputs, { language: "", code: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;

    setInputs(onChangeValue);

    setData({ ...data, content: inputs });
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    setData({ ...data, content: inputs });
  };

  
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get("/api/users/me");
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
      user: userId,
      imageId:imageId
    };
    setData(newData);
    console.log(newData);
    await axios.post("/api/post", newData);

    setData({
      title: "",
      desc: "",
      content: [],
      imageId:""
    });
    setInputs([{ language: "", code: "" }]);
    setImageId("");
  };

  return (
    <div className="flex h-full min-h-screen justify-start items-center flex-col w-screen bg-purple-600 ">
      <h1 className="text-3xl font-bold text-white">Add component</h1>
      <div className="flex__center flex-col">
        <form>
          <label className="text-white"> Title</label>
          <input
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            type="text"
            className="m-2 p-2 w-full rounded-lg"
          />
          <label className="text-white">Description</label>
          <input
            value={data.desc}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
            type="text"h
            className="m-2 p-2 w-full rounded-lg"
          />
          <label className="text-white">Content</label>
          <div className="container">
            {inputs.map((item, index) => (
              <div className="input_container" key={index}>
                <label htmlFor="language">Enter file type </label>
                <select
                  name="language"
                  id="language"
                  value={item.language}
                  onChange={(event) => handleChange(event, index)}
                >
                  <option value="any">any</option>
                  <option value="jsx">jsx</option>
                  <option value="swift">swift</option>
                  <option value="python">python</option>
                  <option value="cpp">cpp</option>
                  <option value="c">c</option>
                  <option value="kotlin">kotlin</option>
                  <option value="tsx">tsx</option>
                  <option value="rust">rust</option>
                </select>

                <br />
                <label htmlFor="code"> code</label>

                <textarea
                  name="code"
                  id="code"
                  value={item.code}
                  onChange={(event) => handleChange(event, index)}
                  className="m-2 p-2 w-full rounded-lg"
                />
                {inputs.length > 1 && (
                  <button onClick={() => handleDeleteInput(index)}>
                    Delete
                  </button>
                )}
                {index === inputs.length - 1 && (
                  <button
                    className="text-3xl font-bold text-white bg-slate-700 rounded-md"
                    onClick={() => handleAddInput()}
                  >
                    Add more file
                  </button>
                )}
              </div>
            ))}
          </div>
          <br />
          <h1>Add Image</h1>
          <br />
          <CldUploadButton
            uploadPreset="dydjag7i"
            onSuccess={(results) => {
              console.log("Public ID", results.info.public_id);
              setImageId(results.info.public_id);
            }}
            className="text-3xl font-bold text-white bg-slate-700 rounded-md"
          />
          {imageId && (
            <CldImage
              width="300"
              height="300"
              src={imageId}
              sizes="100vw"
              alt="Description of my image"
            />
          )}
        </form>
        <button
          onClick={handleSubmit}
          className="m-2 p-2 w-fit rounded-lg bg-emerald-600"
        >
          Add Component
        </button>
      </div>
    </div>
  );
};

export default AddComponent;
