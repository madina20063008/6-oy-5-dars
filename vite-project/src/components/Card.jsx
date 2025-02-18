import React from "react";

const Card = ({ children }) => {
    return (
      <div className="p-4 border rounded shadow-md w-80 text-center mb-8">
        {children}
      </div>
    );
};

export default Card;