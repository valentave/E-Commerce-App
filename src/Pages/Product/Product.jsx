import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductSameSeller from "../../Hooks/ProductSameSeller";
import ProductAlsoBought from "../../Hooks/ProductAlsoBought";
import LoadingGif from "../../assets/loading.gif";
import ReturnSvg from "../../assets/return.svg";
import SecuritySvg from "../../assets/security.svg";
import TrophySvg from "../../assets/trophy.svg";
import Attention from "../../assets/attention.svg";
import Chronometer from "../../assets/chronometer.svg"
import "./Product.css";

function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [buyCount, setBuyCount] = useState(1);
  const params = useParams();
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.id)
      .then((response) => response.json())
      .then((response) => {
        setProduct({ ...response });
        setIsLoading(false);
      })
      .catch(() => {
        setNotFound(true)
      });
  }, [params.id]);

  useEffect(() => {
    document.title = product.title + " | Free Market";
  }, [product]);

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
    setBuyCount(parseInt(target));
  }

  function updateCart() {
    const item = { ...product, quantity: buyCount };
    const itemId = item.id;
    const checkedItem = cartItems.find((itemInCart) => itemInCart.id === itemId);
    if (!checkedItem) setCartItems(() => [...cartItems, item]);
    else {
      const cartCopy = cartItems.map((itemInCart) => {
        if (itemInCart.id != itemId) return itemInCart;
        return { ...itemInCart, quantity: itemInCart.quantity + buyCount }
      });
      setCartItems([...cartCopy]);
    }
    showNotification(item.quantity);
  }

  function showNotification(quantity) {
    setIsNotificationShown(quantity);
    document.querySelector(".notification-container").classList.remove("inactive");
    setTimeout(() => {
      document.querySelector(".notification-container").classList.add("inactive");
      setIsNotificationShown(false)
    }, 3500)
  }

  return (
    <div className="content-product content">
      <div className="notification-container inactive">
        {isNotificationShown === 1 ?
          <p><span className="green-text bold-text">1</span> product has been added to the cart.</p> :
          <p><span className="green-text bold-text">{isNotificationShown}</span> products have been added to the cart.</p>}
      </div>
      {isLoading &&
        <div className="loading-container">
          <img src={LoadingGif} />
          <p>Loading...</p>
        </div>}
      {!isLoading && notFound && <ErrorPage />}
      {!isLoading && !notFound && (
        <>
          <div className="product-page-first-level">
            <div className="product-page-info">
              <div className="product-page-img-container  ">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-page-data-container">
                <div>
                  <h1>{product.title}</h1>
                  <div className="rating-container">
                    <p className="rating-rate">{product.rating.rate}</p>
                    <p className="rating-stars">{"★".repeat(product.rating.rate.toFixed(0)) + "☆".repeat(5 - product.rating.rate.toFixed(0))}</p>
                    <p className="rating-count">{" (" + product.rating.count + ")"}</p>
                  </div>
                </div>
                <div>
                  <h2 className="product-page-price">${product.price}</h2>
                  <p className="product-page-installments">{"or in 12x $" + (product.price / 10).toFixed(2)} paying with Market Credit.</p>
                  <a href="#">See payment methods.</a>
                </div>
              </div>
            </div>
            <div className="product-page-buy-container">
              <div className="delivery-info">
                <p className="green-text bold-text">Arrives{product.price >= 20 ? " free " : " "}tomorrow</p>
                <p className="arrives-disclaimer">Buying before midnight.</p>
                <a href="#">More delvivery methods</a>
              </div>
              <p className="bold-text">Available stock</p>
              <div className="quantity-selector-container">
                <button onClick={removeOne}>-</button>
                <input type="number" value={buyCount} onChange={updateCount} min="1" defaultValue="1" />
                <button onClick={addOne}>+</button>
              </div>
              <button onClick={updateCart} className="buy-btn">Add to cart</button>
              <div className="benefits-container">
                <div className="benefit">
                  <img src={ReturnSvg} alt="return" />
                  <div>
                    <a href="#">Free return.</a>
                    <p>You have 30 days from when you receive it.</p>
                  </div>
                </div>
                <div className="benefit">
                  <img src={SecuritySvg} alt="security" />
                  <div>
                    <a href="#">Protected purchase.</a>
                    <p>Receive the product you expected or we will refund your money.</p>
                  </div>
                </div>
                <div className="benefit">
                  <img src={TrophySvg} alt="market points" />
                  <div>
                    <a href="#">Market points.</a>
                    <p>You earn {(product.price / 2).toFixed(0)} points.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <div className="product-page-second-level">
            <div className="first-column">
              <h2>People also bought</h2>
              <div className="products-also-bought-container">
                <ProductAlsoBought />
                <ProductAlsoBought />
                <ProductAlsoBought />
              </div>
              <h2>Products from the same seller</h2>
              <div className="products-same-seller-container">
                <ProductSameSeller />
                <ProductSameSeller />
              </div>
                <a href="#" className="see-more-products">See more products from the same seller</a>
              <hr className="separator"/>
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>
            <div className="second-column">
              <div className="seller-info-container">
                <p>Information about the seller</p>
                <p className="green-text bold-text">MarketBoss Platinum</p>
                <p className="seller-description">It&apos;s one of the best on the site!</p>
                <div className="reputation-container">
                  <div className="reputation r-one"></div>
                  <div className="reputation r-two"></div>
                  <div className="reputation r-three"></div>
                  <div className="reputation r-four"></div>
                  <div className="reputation r-five"></div>
                </div>
                <div className="seller-attributes">
                  <div className="seller-item">
                    <p className="sells">+750K</p>
                    <p className="attribute-description">Completed sales</p>
                  </div>
                  <div className="middle-separator seller-item">
                    <img src={Attention} alt="god attention" />
                    <p className="attribute-description">Provides good care</p>
                  </div>
                  <div className="seller-item">
                    <img src={Chronometer} alt="punctual" />
                    <p className="attribute-description">Ship the products on time</p>
                  </div>
                </div>
              </div>
              <div className="cheaper-options">
                <p>Used and Reconditioned Options</p>
                <hr className="separator"/>
                <p><a href="#" className="aaa">See 3 purchase options</a></p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
