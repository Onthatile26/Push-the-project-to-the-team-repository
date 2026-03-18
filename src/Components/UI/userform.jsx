import { useState } from "react";
import Button from "./Button";

function UserForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
  }

  const inputStyle = {
    padding: "10px",
    width: "300px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };

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

      <Button type="submit" />

    </form>
  );
}

export default UserForm;