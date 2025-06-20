import React from "react";
import "./Input.css";

function Input({ setValue, value }) {
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
   placeholder="Search" />
  );
}

export default Input;
