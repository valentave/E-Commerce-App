import "./AboutUs.css"

function AboutUs() {
    
    document.title = "About us | Free Market";

    return(
        <div className="content content-aboutus">
            <p>This page is a fake e-commerce for educational purposes.</p>
            <p>Products are fetched from the fakestoreapi.com public API.</p>
            <p>You can visit the store and add products to your cart, but you can&apos;t actually buy.</p>
        </div>
    )
}

export default AboutUs