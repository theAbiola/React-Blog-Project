import { useState, useEffect } from "react"
import BlogList from "./BlogList.jsx";

const Home = () => {
    const [blogs, setBlogs] = useState([])

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch('http://localhost:3500/posts/')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
            })
    }, [])

    return (
        <>
            <div className="home">
                <BlogList blogs={blogs !== "" ? blogs : undefined} title="All Blogs" handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default Home;