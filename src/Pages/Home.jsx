import React from "react";
import UserCard from "../Components/UI/UserCard";
import Button from "../Components/UI/Button";
import Counter from "../Components/UI/Counter";
import UserForm from "../Components/UI/userform";

function Home({
  message,
  handleClick,
  cardContainer,
  frontend,
  backend,
  ui,
  laptop,
  iphone,
  car,
}) {
  return (
    <main style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Team Members</h2>

      <div style={cardContainer}>
        <UserCard name="Bree London" role="Frontend Developer" image={frontend} />
        <UserCard name="Dee Kanyi" role="UI Designer" image={ui} />
        <UserCard name="David Lee" role="Backend Developer" image={backend} />
      </div>

      <h2>Products</h2>

      <div style={cardContainer}>
        <UserCard name="Laptop" price="R12,000" image={laptop} />
        <UserCard name="Phone" price="R8,000" image={iphone} />
        <UserCard name="Car" price="R65,000" image={car} />
      </div>

      <p style={{ marginTop: "30px" }}>{message}</p>

      <Button onClick={handleClick}>Send Message</Button>

      <Counter />

      <UserForm />
    </main>
  );
}

export default Home;