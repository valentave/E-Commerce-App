import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import CartItem from "../../Hooks/CartItem";

function Cart() {
    const [cartItems, setCartItems] = useContext(CartContext);

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
        </div>
    )
}

export default Cart