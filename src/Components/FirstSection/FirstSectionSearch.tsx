import "../../css/first-section-search.css"
import locationIcon from "../../../public/icon/location-icon.png"
import homeIcon from "../../../public/icon/home-icon.png"
import priceIcon from "../../../public/icon/price-icon.png"
import SignUpButton from "../Ui/SignUpButton"
export default function FirstSectionSearch() {
  return (
    <div className="detailed-search">
        <div className="detailed-input">
            <input type="text" placeholder="Location" />
            <img src={locationIcon} alt="" />
        </div>
        <div className="detailed-input">
            <input type="text" placeholder="Type" />
            <img src={homeIcon} alt="" />
        </div>
        <div className="detailed-input custom-width">
            <input type="text" placeholder="Price" />
            <img width={20} src={priceIcon} alt="" />
        </div>
        <SignUpButton/>
    </div>
  )
}
