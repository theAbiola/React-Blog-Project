import { useState, useEffect } from "react"
import BlogList from "./BlogList.jsx";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3500/posts/')
                .then(res => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setBlogs(data)
                    setIsLoading(false)
                })
        }, 1500), []
    })

    return (
        <>
            <div className="home">
                {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
                {isLoading && <div>Loading...</div>}
            </div>
        </>
    );
}

export default Home;