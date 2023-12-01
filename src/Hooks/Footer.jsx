import { useState } from "react";
import { Link } from "react-router-dom";
import "../Hooks/Footer.css";

function Footer() {
    const [moreInfoEnabled, setMoreInfoEnabled] = useState(false)

    function showHideMoreInfo() {
        setMoreInfoEnabled(!moreInfoEnabled);
    }

    return(
        <footer className="footer">
            <button onClick={showHideMoreInfo} className="more-info-btn">More info</button>
            {moreInfoEnabled && (
                <div className="more-info-footer">
                    <ul>
                        <p className="more-info-headers">About</p>
                        <li><Link to="about-us">Free Market</Link></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">Trends</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <p className="more-info-headers">Another Sites</p>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Market Payments</a></li>
                        <li><a href="#">Market Shops</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Market ads</a></li>
                    </ul>
                    <ul>
                        <p className="more-info-headers">Help</p>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Problem resolution</a></li>
                        <li><a href="#">Security Center</a></li>
                    </ul>
                    <ul>
                        <p className="more-info-headers">Social Networks</p>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Youtuber</a></li>
                        <li><a href="https://github.com/valentave" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </ul>
                </div>
            )}
            <ul className="footer-links">
                <li><a href="#">Work with us</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Consumer Defense</a></li>
            </ul>
            <p>Coopyright © 2023 Free Market</p>
        </footer>
    )
}

export default Footer