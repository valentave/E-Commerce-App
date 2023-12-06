import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"
import CartItem from "../../Hooks/CartItem";
import Ticket from "../../assets/ticket.svg"
import "./Cart.css"

function Cart() {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [emptyCart, setEmptyCart] = useState(false);
    let totalPrice = (cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2);
    let totalProducts = (cartItems.reduce((acc, item) => acc + parseInt(item.quantity), 0));
    const [progressBar, setProgressBar] = useState(totalPrice >= 20 ? 2000 : ((20 - (20 - totalPrice)) * 1000));
    document.title = "Cart | Free Market";

    useEffect(() => {
        let newPrice = (totalPrice >= 20 ? 2000 : ((20 - (20 - totalPrice)) * 100))
        setProgressBar(newPrice);
    }, [totalPrice])

    useEffect(() => {
        if (cartItems.length === 0) setEmptyCart(true)
    }, [cartItems])

    function updateCart(e){
        let targetId = e.target.id.slice(10);
        let targetValue = e.target.value;
        if (targetValue % 1 != 0) {
            targetValue = targetValue.toFixed(0)
            e.target.value = targetValue;
        }
        if (targetValue < 1) {
            targetValue = 1;
            e.target.value = targetValue;
        }
        const copyCart = cartItems.map((item) => {
            if (item.id != targetId) return item;

            return {...item, quantity: targetValue}
        })
        setCartItems([...copyCart])
    }

    function onRemove(e){
        let targetId = e.target.id.slice(14);
        const copyCart = cartItems.filter((item) => item.id != targetId);
        setCartItems([...copyCart])
    }

    

    function showNotification() {
        document.querySelector(".notification-container").classList.remove("inactive");
        setCartItems([])
        setTimeout(() => {
        document.querySelector(".notification-container").classList.add("inactive");
        }, 5000)
    }
    
    return(
        <div className="content content-cart">
            <div className="notification-container inactive">
                <p>Thank you! Your purchase has been confirmed.</p>
            </div>
            {emptyCart &&
            <div className="cart-empty-container">
                <h1>There seems to be nothing in your cart.</h1>
                <h2>Let&apos;s go shopping!</h2>    
                <Link to="../shop" className="shop-link">Shop</Link>
            </div>}
            {!emptyCart &&
                <>
                <div className="cart-items-container">
                    <h2 className="cart-container-title">Products</h2>
                    <hr className="separator"/>
                    {cartItems.map((item) =>(
                        <CartItem key={item.id} item={item} onChange={updateCart} onRemove={onRemove}/>
                    ))}
                    <hr className="separator"/>
                    <div className="cart-shipping-container">
                        <p>Shipping</p>
                        {totalPrice < 20 ? (
                            <p>$20</p>
                        ) : (
                            <p className="green-text bold-text">Free</p>
                        )}
                    </div>
                    <div className="free-shipping-container">
                        <div className="shipping-range-container">
                            <input type="range" name="free-shipping" min="0" max="2000" value={progressBar} readOnly/>
                            <p className={totalPrice >= 20 ? "green-text bold-text" : ""}>Free shipping</p>  
                        </div>
                        {totalPrice <= 20 ? (
                            <div className="add-more-products-container">
                                <p>Add ${(20 - totalPrice).toFixed(2)} more to get free shipping.</p>
                                <Link to="shop">See more products here &gt;</Link>
                            </div>
                        ) : ""}
                    </div>
                </div>
                <div className="cart-checkout-container">
                    <div className="cart-checkout-title-container">
                        <p>Purchase summary</p>
                    </div>
                    <hr className="separator"/>
                    <div className="cart-checkout-info-container">
                        <div className="checkout-products-container">
                            <p>Products {"(" + totalProducts + ")"}</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className="checkout-shipping-container">
                            <p>Shipping</p>
                            {totalPrice < 20 ? (
                                <p>$20</p>
                            ) : (
                                <p className="green-text bold-text">Free</p>
                            )}
                        </div>
                        <div className="checkout-coupon-container">
                            <img src={Ticket} alt="" />
                            <a href="#">Enter coupon code</a>
                        </div>
                        <div className="checkout-total-container">
                            <h3>TOTAL</h3>
                            <h3>${totalPrice >= 20 ? totalPrice : (parseFloat(totalPrice) + 20).toFixed(2)}</h3>
                        </div>
                        <button className="checkout-btn" onClick={showNotification}>Checkout</button>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

export default Cart