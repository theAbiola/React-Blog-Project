import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import LoadingModal from "./LoadingModal.jsx";


const BlogDetails = () => {

    const { id } = useParams()

    const { resourceData: blog, isLoading, isError } = useFetch(`http://localhost:3500/posts/${id}`)

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
                </article>}

        </div>
    )
}

export default BlogDetails;