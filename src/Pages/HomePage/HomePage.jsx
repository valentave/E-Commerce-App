import { Link } from "react-router-dom"
import Sneakers from "../../assets/shoes.webp"
import HomeAppliances from "../../assets/home-appliances.webp"
import Fashion from "../../assets/fashion.webp"
import TvAndAudio from "../../assets/tv-and-audio.webp"
import NineInstallments from "../../assets/flyer-9-installments.webp"
import Installments from "../../assets/flyer-3-6-12-installments.webp"
import "../HomePage/HomePage.css"

function HomePage() {

        return(
            <div className="content-home">
                <section className="hero">
                    <h1 className="home-title">Welcome to Free Market!</h1>
                    <p className="home-text">Take a look at our full product catalog or browse through the different sections of our marketplace.</p>
                    <p className="home-text">We have an extensive list of products so you can find everything you need in one place.</p>
                    <p className="home-text">Free Market, your trusted place.</p>
                    <Link className="shop-link" to="shop">Shop</Link>
                </section>
                <div className="flyers">
                    <img className="flyer flyer-img-1" src={Sneakers} alt="sneakers flyer" />
                    <img className="flyer flyer-img-1" src={HomeAppliances} alt="home appliances flyer" />
                    <img className="flyer flyer-img-2" src={Fashion} alt="fashion flyer" />
                    <img className="flyer flyer-img-4" src={TvAndAudio} alt="tv and audio flyer" />
                    <img className="flyer flyer-img-2" src={NineInstallments} alt="9 installments flyer" />
                    <img className="flyer flyer-img-2" src={Installments} alt="3, 6 and 9 installments flyer" />
                </div>
            </div>
        )
}

export default HomePage