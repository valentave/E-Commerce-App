import { Link } from "react-router-dom"
import Sneakers from "../../assets/shoes.webp"
import HomeAppliances from "../../assets/home-appliances.webp"
import Fashion from "../../assets/fashion.webp"
import TvAndAudio from "../../assets/tv-and-audio.webp"
import NineInstallments from "../../assets/flyer-9-installments.webp"
import Installments from "../../assets/flyer-3-6-12-installments.webp"

function HomePage() {

        return(
            <div>
                <div>
                    <h1>Welcome to E-commerce!</h1>
                    <p>Take a look at our full product catalog or browse through the different sections of our marketplace.</p>
                    <Link to="shop">Shop</Link>
                </div>
                <div>
                    <img src={Sneakers} alt="sneakers flyer" />
                    <img src={HomeAppliances} alt="home appliances flyer" />
                    <img src={Fashion} alt="fashion flyer" />
                    <img src={TvAndAudio} alt="tv and audio flyer" />
                    <img src={NineInstallments} alt="9 installments flyer" />
                    <img src={Installments} alt="3, 6 and 9 installments flyer" />
                </div>
            </div>
        )
}

export default HomePage