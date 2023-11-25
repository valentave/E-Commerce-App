import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({product}) {
    return(
        <a href={`../product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
        </a>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.int,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.float,
    })
}

export default ProductCard