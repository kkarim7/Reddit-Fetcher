import React from "react";
import classes from "../css/Card.module.css";

const Card = (props) => (
  <div className={classes.Card} onClick={props.clicked}>
    {props.children}
  </div>
);

export default Card;