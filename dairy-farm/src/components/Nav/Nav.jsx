// Nav.js
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h2>UNITED AQUA TEC</h2>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open":""}>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/contact">ORDER</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
