import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <img src="" alt="logo" />
            </Link>
            <ul className="navbar-sections">
                <li>Categories</li>
                <li><Link to="shop">Shop</Link></li>
                <li>About us</li>
            </ul>
            <Link to="cart">Cart</Link>
        </header>
    )
}

export default Navbar