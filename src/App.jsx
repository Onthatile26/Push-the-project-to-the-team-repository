import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

import backend from "./assets/Images/backend-dev.webp";
import frontend from "./assets/Images/frontdeveloper.webp";
import ui from "./assets/Images/ui-developer.webp";

import laptop from "./assets/Images/laptop.jpg";
import iphone from "./assets/Images/iphone.jpg";
import car from "./assets/Images/car.jpg";

function App() {
  const [message, setMessage] = useState(
    "Click the button to send a message"
  );

  function handleClick() {
    setMessage("Message sent successfully!");
  }

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              message={message}
              handleClick={handleClick}
              cardContainer={cardContainer}
              frontend={frontend}
              backend={backend}
              ui={ui}
              laptop={laptop}
              iphone={iphone}
              car={car}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;