import React from "react";

function Greeting2({ name }) {
  return <h2 className="text-xl font-bold">Hello, {name || "Guest"}!</h2>;
}

export default Greeting2;