import { Link } from "react-router-dom"

function ErrorPage () {
    return(
        <div className="content">
            <img src="" alt="" />
            <h1>It seems that this page does not exist</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default ErrorPage