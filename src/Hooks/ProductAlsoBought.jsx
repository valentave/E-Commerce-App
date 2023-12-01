import NoPhotography from "../assets/no_photography.svg"
import "./ProductAlsoBought.css"

function ProductAlsoBought () {
    return (
        <div className="product-also-bought">
            <div className="product-ab-img-container">
                <img src={NoPhotography} alt="" />
            </div>
            <hr className="separator"/>
            <div className="product-ab-data-container">
                <p className="product-ab-price">$9,999,999.99</p>
                <p className="product-ab-installments">12x $999,999.99</p>
                <p className="green-text bold-text">Free shipping</p>
                <p className="product-ab-title">Product Title</p>
            </div>
        </div>
    )
}

export default ProductAlsoBought