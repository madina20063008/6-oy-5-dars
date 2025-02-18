import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      Click
    </button>
  );
};

export default Button;