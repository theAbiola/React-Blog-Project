const Create = () => {
    return (
        <>
            <div className="create">
                <form>
                    <label>Blog Title:</label>
                    <input type="text" required />

                    <label>Blog Body:</label>
                    <textarea required></textarea>

                    <label required> Blog Author:</label>
                    <select>
                        <option value="">Select an option...</option>
                        <option>Habib Abiola</option>
                        <option>Alex Thompson</option>
                        <option>Mia Williams</option>
                        <option>Samuel Green</option>
                    </select>

                    <button>Add Blog</button>
                </form>
            </div>

        </>

    );
}

export default Create;