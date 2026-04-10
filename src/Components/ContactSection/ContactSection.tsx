import verifiedIcon from "../../../public/icon/verified-icon.png"
import mailIcon from "../../../public/icon/mail-icon.png"
import "../../css/contact-section.css"
import SignUpButton from "../Ui/SignUpButton"
export default function ContactSection() {
    return (
        <div className="container">
            <div className="contact-section">
                <div className="contact-title">
                    <h4>Do You Have Any Questions?
                        <br />
                        Get Help From Us</h4>
                </div>
                <div className="contact-text">
                    <div className="contact-text-inner">
                        <img src={verifiedIcon} alt="" />
                        <p>Chat live with our support team</p>
                    </div>
                    <div className="contact-text-inner">
                        <img src={verifiedIcon} alt="" />
                        <p>Browse our FAQ</p>
                    </div>
                </div>
                <div className="contact-input">
                    <img width={22} src={mailIcon} alt="" />
                    <input type="text" placeholder="Enter your email address..." />
                    <SignUpButton text="Submit"/>
                </div>
            </div>
        </div>
    )
}
