import React from "react";
import { Link } from "react-router-dom"

function TopNavBar () {
    return (
        <div>
    <li>
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </div>
  );
}
export default TopNavBar;