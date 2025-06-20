import React from "react";
import "./ContentWrapper.css";

function ContentWrapper({ children }) {
  return (
    <div className="content-wrapper">
      {children}
    </div>
  );
}

export default ContentWrapper;
