import PropTypes from 'prop-types';
import "./CartItem.css"

function CartItem({item, onChange, onRemove}) {

    function removeOne(e) {
        let input = e.target.nextSibling;
        if (input.value > 1) {
            input.value = input.value - 1;
            onChange({target: input});
        }
    }
    
    function addOne(e) {
        let input = e.target.previousSibling;
        input.value = parseInt(input.value, 10) + 1;
        onChange({target: input});
    }

    return(
        <div className='cart-item'>
            <div className='cart-item-first-column'>
                <div className='cart-item-img-container'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='cart-item-data-container'>
                    <h3>{item.title}</h3>
                    <button className='remove-btn' onClick={onRemove} id={"remove-button-" + item.id}>Remove</button>
                </div>
            </div>
            <div className='cart-item-second-column'>
                <button onClick={removeOne}>-</button>
                <input type="number" id={"cart-item-" + item.id} value={item.quantity} onChange={onChange} min="1"/>
                <button onClick={addOne}>+</button>
            </div>
            <div className='cart-item-third-column'>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
}

export default CartItem