"use client"

import TopicsList from "../components/topicList";

export default function Home() {
  function handleSubmit() {
    console.log("Form submitted");
  }
  return (
    <div className="flex flex-col  bg-pink-700 justify-center items-center h-screen ">
      <form className="flex flex-col" >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <button onClick={handleSubmit} >add</button>
      </form>
      <TopicsList />
    </div>
  );
}


