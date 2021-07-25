import React, { useEffect, useState } from "react"
import Card from '../components/Card';
import NavBar from '../components/NavBar';

import { useDispatch, useSelector } from "react-redux";

import classes from "../css/Home.module.css";
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";

const Home = () => {

    const [inputValue, setInputValue] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    const dispatch = useDispatch();
    const redditData = useSelector((state) => state.posts)

    useEffect(() => {
        fetch("http://www.reddit.com/r/pics/.json?jsonp=").then(res => res.json()).then((data) => {
            dispatch({ type: "GETDATA", payload: data.data.children })
        })
    }, [dispatch, inputValue]);

    useEffect(() => {
        let dumbyArr = [];
        if (redditData) {
            redditData.filter(el => {
                if (el.data.title.includes(inputValue)) {
                    dumbyArr.push(el)
                }
                return dumbyArr;
            })
        }
        setFilteredPosts(dumbyArr)
    }, [inputValue, redditData])

    let content = <Loading />;

    if (redditData && inputValue === "") {
        content = redditData.map((redditPost) => (
            <Link key={redditPost.data.id} to={{
                pathname: `/post/${redditPost.data.id}`, state: {
                    title: redditPost.data.title,
                    author: redditPost.data.author,
                    img: redditPost.data.url,
                    categories: redditPost.data.content_categories[0]
                }
            }}>
                <Card>
                    <div style={{ width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", background: "black" }}>
                        <img src={redditPost.data.url} alt={redditPost.data.title} />
                    </div>
                    <h4>{redditPost.data.title}</h4>
                </Card>
            </Link>

        ))
    } else {
        content = filteredPosts.map((redditPost) => (
            <Link key={redditPost.data.id} to={{
                pathname: `/post/${redditPost.data.id}`, state: {
                    title: redditPost.data.title,
                    author: redditPost.data.author,
                    img: redditPost.data.url,
                    categories: redditPost.data.content_categories[0]
                }
            }}>
                <Card>
                    <div style={{ width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", background: "black" }}>
                        <img src={redditPost.data.url} alt={redditPost.data.title} />
                    </div>
                    <h4>{redditPost.data.title}</h4>
                </Card>
            </Link>

        ))
    }

    return (
        <div className={classes.Home}>
            <NavBar val={inputValue} onChange={(e) => { setInputValue(e.target.value) }} main />
            <div className={classes.HomeContent}>
                {content}
            </div>
        </div>
    );
}

export default Home;
