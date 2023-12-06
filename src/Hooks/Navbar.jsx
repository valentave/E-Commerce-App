import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import Cart from "../assets/cart.svg";
import Menu from "../assets/menu.svg";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const dropDownRef = useRef(null);
    const [menuCollapsed, setMenuCollapsed] = useState(true);

    function handleDropClick() {
        setIsOpen(!isOpen);
    } 

    function handleClickOutside(e) {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((cat) => setCategories([...cat]))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, []);

    function handleToggleMenu() {
        setMenuCollapsed(!menuCollapsed);
    }

    return (
        <header className="navbar">
            <div>
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo"/>
                </Link>
                <ul className={"navbar-sections" + (menuCollapsed ? "" : " show")} ref={dropDownRef}>
                    <li><button onClick={handleDropClick} className="categories-btn">Categories</button></li>
                    {isOpen && (
                        <ul className="categories-list">
                            {categories.map((category) => (
                                <li className="category-item" key={category}><Link className="category" to={"./shop/" + category}>{category}</Link></li>
                            ))}
                        </ul>
                        )}
                    <li><Link className="navbar-item" to="shop">Shop</Link></li>
                    <li><Link className="navbar-item" to="about-us">About us</Link></li>
                    <li><Link className="navbar-item" to="#">Help</Link></li>
                </ul>
                <div className="menu-cart-container">
                    <button className="menu-btn" onClick={handleToggleMenu}><img src={Menu} alt="menu" /></button>
                    <Link to="cart"><img src={Cart} alt="shopping cart" /></Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar