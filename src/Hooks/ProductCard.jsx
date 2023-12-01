import PropTypes from "prop-types";
import "../Hooks/ProductCard.css";

function ProductCard({product}) {
    return(
        <a href={`../product/${product.id}`} className="product-card">
            <div className="product-img-container">
                <img src={product.image} alt={product.title} className="product-img"/>
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-numbers">
                    <div className="price-container">
                        <h2 className="product-price">${product.price}</h2>
                        <p className="product-installments">{"or in 12X $" + (product.price / 10).toFixed(2)}</p>
                    </div>
                    <div className="rating-container">
                        <p className="rating-rate">{product.rating.rate}</p>
                        <p className="rating-stars">{"★".repeat(product.rating.rate.toFixed(0)) + "☆".repeat(5 - product.rating.rate.toFixed(0))}</p>
                        <p className="rating-count">{" (" + product.rating.count + ")"}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object
}

export default ProductCard