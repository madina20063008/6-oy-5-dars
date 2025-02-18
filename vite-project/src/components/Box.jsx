import React from "react";

const Box = ({ width, height, color }) => {
    const boxStyle = {
        width: width || "100px",
        height: height || "100px",
        backgroundColor: color || "gray",
    };

  return <div className="mb-8" style={boxStyle}></div>;
};

export default Box;
