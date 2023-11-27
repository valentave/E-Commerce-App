import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from "../../Hooks/ProductCard";
import LoadingGif from "../../assets/loading.gif"

function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    console.log(params)
    useNavigate();

    useEffect(() => {
        if (Object.keys(params).length === 0){
            fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
                .then((response) => {
                    setProducts([...response]);
                    setIsLoading(false);
                });
        } else {
            fetch('https://fakestoreapi.com/products/category/' + params.category)
            .then((response) => response.json())
            .then((response) => {
                setProducts([...response]);
                setIsLoading(false);
            })
        }
      }, [params]);

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