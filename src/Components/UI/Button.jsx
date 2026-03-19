import React from "react";

function Button({ children, onClick, type = "button", width }) {
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#0b0b8f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    width: width || "auto",
  };

  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {children || "Submit"}
    </button>
  );
}

export default Button;