import "../../css/services-section.css"
import ServicesCards from "./ServicesCards"

export default function ServicesSection() {
    return (
        <div className="container">
            <div className="services-section">
                <h3>Why Choose Us</h3>
                <p>Elevating Your Home Buying Experience with Expertise, Integrity, <br /> and Unmatched Personalized Service</p>
                <ServicesCards/>
            </div>
        </div>
    )
}
