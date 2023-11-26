import PropTypes from 'prop-types';

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
        <div>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>${item.price}</p>
            <div>
                <button onClick={removeOne}>-</button>
                <input type="number" id={"cart-item-" + item.id} value={item.quantity} onChange={onChange}/>
                <button onClick={addOne}>+</button>
            </div>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={onRemove} id={"remove-button-" + item.id}>Remove</button>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
}

export default CartItem