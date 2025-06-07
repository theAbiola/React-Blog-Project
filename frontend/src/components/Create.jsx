import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Habib Abiola')

    function handleSubmit(event) {
        event.preventDefault()
        const blog = { title, body, author }

        console.log(blog)
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

                    <button>Add Blog</button>
                </form>
            </div>

        </>

    );
}

export default Create;