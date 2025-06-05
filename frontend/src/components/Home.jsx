import BlogList from "./BlogList.jsx";
import useFetch from "../hooks/useFetch.js";
import LoadingModal from "./LoadingModal.jsx";

const Home = () => {

    const { resourceData: blogs, isLoading, isError } = useFetch('http://localhost:3500/posts/')

    // const [blogs, setBlogs] = useState([])

    // useEffect(() => {
    //     if (resourceData && blogs.length === 0) {
    //         setBlogs(resourceData)
    //     }
    // }, [resourceData])

    // function handleDelete(id) {
    //     // const newBlogs = blogs.filter(blog => {
    //     //     blog.id === id
    //     // })
    //     setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id))
    // }

    return (
        <>
            <div className="home">
                {blogs && <BlogList blogs={blogs} title="All Blogs" /* handleDelete={handleDelete} */ />}
                {isLoading && <LoadingModal />}
                {isError && <p>{isError}</p>}
            </div>
        </>
    );
}

export default Home;