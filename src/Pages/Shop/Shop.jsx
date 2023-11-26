import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import ProductCard from "../../Hooks/ProductCard";
import LoadingGif from "../../assets/loading.gif"

function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => {
                setProducts([...response]);
                setIsLoading(false);
            });
      }, []);

    return (
        <>
        {isLoading && 
        <div>
            <img src={LoadingGif} />
            <p>Loading...</p>  
        </div>}
        {!isLoading &&
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>))}
        </div>}
        </>
    )
}

export default Shop