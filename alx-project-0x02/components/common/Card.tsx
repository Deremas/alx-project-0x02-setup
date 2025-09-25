import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <>
        {/* <h1 className="text-lg font-bold">Card component</h1> */}
      <div className="border p-4 rounded shadow mt-2">
        <h2 className="text-md font-bold">{title}</h2>
        <p className="mt-2">{content}</p>
      </div>
    </>
  );
};

export default Card;
