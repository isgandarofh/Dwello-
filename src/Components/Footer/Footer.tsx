import "../../css/footer.css"
import DwelloLogo from "../../../public/img/dwello-logo.svg"
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
                            <li><p>Our Story</p></li>
                            <li><p>Careers</p></li>
                            <li><p>Our Team</p></li>
                            <li><p>Resources</p></li>
                        </ul>
                    </div>
                    <div className="footer-menu-text">
                        <ul>
                            <li><h6>Support</h6></li>
                            <li><p>FAQ</p></li>
                            <li><p>Contact Us</p></li>
                            <li><p>Help Center</p></li>
                            <li><p>Terms of Service</p></li>
                        </ul>
                    </div>
                    <div className="footer-menu-text"><ul>
                        <li><h6>Find Us</h6></li>
                        <li><p>Events</p></li>
                        <li><p>Locations</p></li>
                        <li><p>Newsletter</p></li>
                    </ul></div>
                    <div className="footer-menu-text"><ul>
                        <li><h6>Our Social</h6></li>
                        <li><p>Instagram</p></li>
                        <li><p>Facebook</p></li>
                        <li><p>Twitter (x)</p></li>
                    </ul></div>
                </div>
            </div>
        </footer>
    )
}
