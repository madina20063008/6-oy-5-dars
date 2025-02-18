import React, { useEffect } from "react";

function WithLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log("Rendered");
    });

    return <WrappedComponent {...props} />;
  };
}

export default WithLogger;
