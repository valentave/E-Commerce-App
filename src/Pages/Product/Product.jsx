import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.id)
      .then((response) => response.json())
      .then((response) => {
        setProduct({...response});
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <p>Rating: {product.rating ? product.rating.rate : "N/A"}</p>
        <p>{product.rating ? product.rating.count : "0"} ratings</p>
    </div>
  );
}

export default Product;
