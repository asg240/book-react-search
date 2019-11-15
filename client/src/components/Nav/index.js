import React from "react";
import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id="homeLink" href="/">
        React Google Search
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Books Saved</a>
     </li>
   </ul>
 </nav>
 <Jumbotron/>
 </div>
  );
}

export default Nav;
