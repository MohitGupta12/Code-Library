"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import CodeBlockDemo from "@/components/snipid";
import { CldImage } from "next-cloudinary";

const detail = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const id = searchParams.get("id");
  useEffect(() => {
    async function fun() {
      const data = await axios.get(`/api/${id}`);
      setData(data);
      console.log(data);
    }
    fun();
  }, []);

  console.log(data);

  return (
    <>
      <div className="flex h-full min-h-lvh justify-start items-center flex-col w-screen bg-purple-600">
        {data && (
          <h2 className="text-3xl font-bold text-white">
            description:{data.data.desc}
          </h2>
        )}
        {data && (
          <h1 className="text-3xl font-bold text-white">
            title:{data.data.title}
          </h1>
        )}
        {data && data.data.imageId && (
          <CldImage
            width="500"
            height="500"
            src={data.data.imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
        {data &&
          data.data.content.map((post, index) => {
            return (
              <>
                <br></br>

                <div key={index} className="bg-teal-300 p-2 m-2 rounded-lg">
                  <CodeBlockDemo
                    code={post.code}
                    language={post.language}
                  ></CodeBlockDemo>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default detail;
