import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{backgroundColor:'blue', fontFamily:"sans-serif"}}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
