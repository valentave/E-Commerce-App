import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"
import CartItem from "../../Hooks/CartItem";

function Cart() {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [emptyCart, setEmptyCart] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) setEmptyCart(true)
    }, [cartItems])

    function updateCart(e){
        let targetId = e.target.id.slice(10);
        let targetValue = e.target.value;
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
    
    return(
        <>
            {emptyCart &&
            <div>
                <h1>There seems to be nothing in your cart.</h1>
                <h2>Let&apos;s go shopping!</h2>    
                <Link to="../shop">Shop</Link>
            </div>}
            {!emptyCart &&
                <div>
                <div>
                    {cartItems.map((item) =>(
                        <CartItem key={item.id} item={item} onChange={updateCart} onRemove={onRemove}/>
                    ))}
                </div>
                <div>
                    <h2>TOTAL: ${(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2)}</h2>
                    <button>Checkout</button>
                </div>
            </div>}
        </>
    )
}

export default Cart