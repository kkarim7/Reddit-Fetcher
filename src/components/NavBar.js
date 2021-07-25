import React from "react";
import { Link } from "react-router-dom";

import classes from "../css/NavBar.module.css";

const NavBar = (props) => (
  <header>
    <nav className={classes.Nav}>
      <h1><Link to="/home" className={classes.NavTitle}>Reddit Fetcher</Link></h1>
      {props.main && <input placeholder="FILTER" value={props.val} onChange={props.onChange} />}
    </nav>
  </header>
);

export default NavBar;