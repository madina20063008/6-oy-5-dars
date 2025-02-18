import React from "react";

function StatusMessage({ isSuccess }) {
  return <h2>{isSuccess ? "Success!" : "Error!"}</h2>;
}

export default StatusMessage;
