import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    backgroundColor: "darkblue",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  const linkStyle = {
    color: "white",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "",
  };

  return (
    <header style={headerStyle}>
      <h1>Setup React</h1>

      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </nav>
    </header>
  );
}

export default Header;