import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Habib Abiola')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate() //we initilize the useNavigate hook here

    function handleSubmit(event) {
        event.preventDefault()
        const blog = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:3500/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog submitted')
            setIsPending(false)
            navigate('/') //We use the useNavigate hook here to redirect the user to the home page after submitting the blog
        })
    }

    return (
        <>
            <div className="create">
                <h2>Add a new Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <label>Blog Body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(event) => { setBody(event.target.value) }}
                    ></textarea>

                    <label> Blog Author:</label>
                    <select
                        required
                        value={author}
                        onChange={(event) => { setAuthor(event.target.value) }}
                    >
                        <option value="">Select an option...</option>
                        <option value="Habib Abiola">Habib Abiola</option>
                        <option value="Alex Thompson">Alex Thompson</option>
                        <option value="Mia Williams">Mia Williams</option>
                        <option value="Samuel Green">Samuel Green</option>
                    </select>

                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog...</button>}
                </form>

            </div>

        </>

    );
}

export default Create;