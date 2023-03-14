import * as React from "react";
import "../../style.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            Software-Tools
          </a>
          <div className="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            Medien- und Dateiformate
          </a>
          <div className="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        </li>
        <li>
          <a href="#">Über uns</a>
        </li>
      </ul>
    </nav>
  );
}
