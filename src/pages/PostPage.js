import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";

import classes from "../css/PostPage.module.css";

const PostPage = (props) => {
    const location = useLocation();
    const {title, author, img, categories} = location.state;

    return (
        <div className={classes.backgroundColor}>
            <NavBar />
            <div className={classes.imgContainer}>
                <img src={img} alt={title} />
            </div>

            <div className={classes.infoContainer}>
                <h1>Author: {author}</h1>
                <h1>Category: {categories}</h1>
            </div>
            <div className={classes.contentContainer}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default PostPage;
