import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  phone,
  website,
}) => {
  return (
    <div className="border text-black rounded-2xl shadow p-5 bg-white hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>

      <p className="text-gray-600 text-sm">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-600 text-sm">
        <span className="font-medium">Phone:</span> {phone}
      </p>

      <p className="text-gray-600 text-sm">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {website}
        </a>
      </p>

      <p className="mt-2 text-gray-700 text-sm">
        <span className="font-medium">Address:</span>{" "}
        {`${address.street}, ${address.city}, ${address.zipcode}`}
      </p>
    </div>
  );
};

export default UserCard;
