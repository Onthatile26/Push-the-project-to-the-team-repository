import React, { useState } from "react";
import Button from "./Button.jsx";

function UserForm() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  const inputStyle = {
    padding: "10px",
    width: "300px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
      <h3>Contact Form</h3>

      <div>
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          style={inputStyle}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button type="submit" width={inputStyle.width}>
        Submit
      </Button>
    </form>
  );
}

export default UserForm;