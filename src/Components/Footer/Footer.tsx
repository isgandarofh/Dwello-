import "../../css/footer.css"
import DwelloLogo from "../../../public/img/dwello-logo.svg"
import insLogo from "../../../public/icon/insta-icon.png"
import twitterLogo from "../../../public/icon/twitter-icon.png"
import facebookLogo from "../../../public/icon/facebook-icon.png"
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-left-text">
                    <img src={DwelloLogo} alt="" />
                    <p>Bringing you closer to your dream home, one click at a time.</p>
                </div>
                <div className="footer-menu">
                    <div className="footer-menu-text">
                        <ul>
                            <li><h6>About</h6></li>
                            <li><a href="">Our Story</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Resources</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu-text">
                        <ul>
                            <li><h6>Support</h6></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu-text"><ul>
                        <li><h6>Find Us</h6></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Locations</a></li>
                        <li><a href="">Newsletter</a></li>
                    </ul></div>
                    <div className="footer-menu-text footer-social-media" ><ul>
                        <li><h6>Our Social</h6></li>
                        <li><img src={insLogo} alt="" /><a href="">Instagram</a></li>
                        <li><img src={facebookLogo} alt="" /><a href="">Facebook</a></li>
                        <li><img src={twitterLogo} alt="" /><a href="">Twitter (x)</a></li>
                    </ul></div>
                </div>
            </div>
        </footer>
    )
}
