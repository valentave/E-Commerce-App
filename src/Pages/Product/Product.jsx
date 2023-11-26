import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingGif from "../../assets/loading.gif"

function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [buyCount, setBuyCount] = useState(1);
  const params = useParams();
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.id)
      .then((response) => response.json())
      .then((response) => {
        setProduct({...response});
        setIsLoading(false);
      })
      .catch(() => {
        setNotFound(true)
      });
  }, [params.id]);

  function removeOne() {
    if (buyCount > 1) {
        setBuyCount(buyCount - 1);
    }
  }

  function addOne() {
    setBuyCount(buyCount + 1);
  }

  function updateCount(e) {
    const target = e.target.value;
    setBuyCount(target);
  }

  function updateCart() {
    const item = {...product, quantity: buyCount};
    const itemId = item.id;
    const checkedItem = cartItems.find((itemInCart) => itemInCart.id === itemId);
    if (!checkedItem) setCartItems(() => [...cartItems, item]);
    else {
        const cartCopy = cartItems.map((itemInCart) => {
            if (itemInCart.id != itemId) return itemInCart;
            return {...itemInCart, quantity: itemInCart.quantity + buyCount}    
        });
        setCartItems([...cartCopy]);
    }
  }

  return (
    <>
      {isLoading && 
      <div>
        <img src={LoadingGif} />
        <p>Loading...</p>  
      </div>}
      {!isLoading && notFound && <ErrorPage/>}
      {!isLoading && !notFound && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <div>
              <button onClick={removeOne}>-</button>
              <input type="number" value={buyCount} onChange={updateCount}/>
              <button onClick={addOne}>+</button>
              <button onClick={updateCart}>Add to cart</button>
          </div>
          <p>Rating: {product.rating ? product.rating.rate : "N/A"}</p>
          <p>{product.rating ? product.rating.count : "0"} ratings</p>
        </div>
      )}
    </>
  );
}

export default Product;
