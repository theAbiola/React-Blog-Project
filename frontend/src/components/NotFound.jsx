import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Page not found</h2>
            <p>The requested page cannot be found</p>
            <Link to="/">Go back Home</Link>
        </div>
    );
}

export default NotFound;