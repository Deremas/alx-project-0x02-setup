import { type ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses = {
    small: "px-3 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition`}
    >
      Button
    </button>
  );
};

export default Button;
