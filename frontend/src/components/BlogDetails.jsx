import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import LoadingModal from "./LoadingModal.jsx";


const BlogDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { resourceData: blog, isLoading, isError } = useFetch(`http://localhost:3500/posts/${id}`)

    function handleDelete() {
        fetch(`http://localhost:3500/posts/${blog.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="blog-details">
            {isError && <p> Error fetching post, try again, this time with a valid URL or endpoint...</p>}
            {isLoading && <LoadingModal />}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p style={{
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    }}>{blog.body}</p>
                    <p style={{
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    }}>Written by: {blog.author}</p>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>}

        </div>
    )
}

export default BlogDetails;