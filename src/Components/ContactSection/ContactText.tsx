import verifiedIcon from "../../../public/icon/verified-icon.png"

export default function ContactText() {
    return (
        <div>
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
        </div>
    )
}
