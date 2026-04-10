import "../../css/contact-section.css"
import ContactInput from "./ContactInput"
import ContactText from "./ContactText"
import ContactTitle from "./ContactTitle"
export default function ContactSection() {
    return (
        <div className="container">
            <div className="contact-section">
                <ContactTitle/>
                <ContactText/>
                <ContactInput/>
            </div>
        </div>
    )
}
