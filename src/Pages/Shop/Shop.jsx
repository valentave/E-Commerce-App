import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import ProductCard from "../../Hooks/ProductCard";

function Shop() {
    const [products, setProducts] = useState([]);
    useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => setProducts([...response]));
      }, []);

    return (
        <>
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    )
}

export default Shop