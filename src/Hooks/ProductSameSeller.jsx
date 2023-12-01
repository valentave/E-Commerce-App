import NoPhotography from "../assets/no_photography.svg"
import "./ProductSameSeller.css"

function ProductSameSeller() {
    return(
        <div className="product-same-seller">
            <div className="product-ss-img-container">
                <img src={NoPhotography} alt="" />
            </div>
            <div>
                <p className="product-ss-title">Product Title</p>
                <p className="product-ss-price">$9,999,999.99</p>
                <p className="product-ss-installments">12x $999,999.99</p>
                <p className="green-text bold-text">Free shipping</p>
            </div>
        </div>
    )
}

export default ProductSameSeller