import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const dropDownRef = useRef(null);

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

    return (
        <header className="navbar">
            <Link to="/">
                <img src="" alt="logo" />
            </Link>
            <ul className="navbar-sections" ref={dropDownRef}>
                <li><button onClick={handleDropClick}>Categories</button></li>
                {isOpen && (
                    <ul>
                        {categories.map((category) => (
                            <li key={category}><Link to={"./shop/" + category}>{category}</Link></li>
                        ))}
                    </ul>
                    )}
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="about-us">About us</Link></li>
            </ul>
            <Link to="cart">Cart</Link>
        </header>
    )
}

export default Navbar