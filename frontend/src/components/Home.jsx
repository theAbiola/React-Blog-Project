import { useState, useEffect } from "react"
import BlogList from "./BlogList.jsx";
import useFetch from "../hooks/useFetch.js";

const Home = () => {

    const { resourceData: blogs, isLoading, isError } = useFetch('http://localhost:3500/posts/')

    return (
        <>
            <div className="home">
                {blogs && <BlogList blogs={blogs} title="All Blogs" />}
                {isLoading && <div>Loading...</div>}
                {isError && <div>{isError}</div>}
            </div>
        </>
    );
}

export default Home;