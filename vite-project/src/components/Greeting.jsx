
import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-none p-2 rounded mb-4 mt-8 bg-cyan-300"
      />
      <h1 className="text-xl font-bold mb-4">Hello, {name || "Guest"}!</h1>
    </div>
  );
};

export default Greeting;

