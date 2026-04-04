import locationIcon from "../../../public/icon/location-icon(2).png"

export default function ServicesCard() {
    
    return (
        <div className="services-card">
            <div className="card-icon">
                <img src={locationIcon} alt="" />
            </div>
            <h5>Expert Guidance</h5>
            <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
    )
}
