import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>That page is not found</h1>
            <h2>Sorry</h2>
            <Link to='/'>Back to home?</Link>
        </div>
    );
}

export default NotFound;