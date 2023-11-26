import PropTypes from "prop-types";

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
    product: PropTypes.object
}

export default ProductCard