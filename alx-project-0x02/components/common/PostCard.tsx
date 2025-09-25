import { PostProps } from "@/interfaces";
import React from "react";

type Props = {};

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <>
      <div className="border text-black rounded-lg shadow p-4 bg-white hover:shadow-md transition">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">User: {userId}</p>
        <p className="mt-2">{content}</p>
      </div>
    </>
  );
};

export default PostCard;
