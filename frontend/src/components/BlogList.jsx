import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <>
            <div className="blog-list">
                <h2>{title}</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p style={{
                                paddingTop: "10px",
                                paddingBottom: "10px"
                            }}>Written by: {blog.author}</p>
                        </Link>

                        {/* <button style={{
                            border: "none",
                            padding: "6px",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }} onClick={() => handleDelete(blog.id)}>Delete Blog Post</button> */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogList;