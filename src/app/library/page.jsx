"use client"
import "../globals.css";

export default function Home() {
  function handleSubmit() {
    console.log("Form submitted");
  }
  return (
    <div className="flex justify-start items-center bg bg-orange-600 h-[90vh]">
      <div className="flex flex-row px-2 m-2" style={{ flex: '15%' }}>
        <div className="flex flex-col">
          <div className="m-2 p-2">Comp1</div>
          <div className="m-2 p-2">Comp2</div>
          <div className="m-2 p-2">Comp3</div>
          <div className="m-2 p-2">Comp4</div>
        </div>
      </div>
      <div className="flex__center" style={{ flex: '85%' }}>That particular component</div>
    </div>
  );
}


