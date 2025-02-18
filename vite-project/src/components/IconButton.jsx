import React from "react";

function IconButton({ icon, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick} className="icon-button">
      {icon} 
    </button>
  );
}

export default IconButton;
