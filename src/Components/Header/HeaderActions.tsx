import searchIcon from "../../../public/icon/search-icon.png"
import personIcon from "../../../public/icon/person-icon.png"
import SignUpButton from "../Ui/SignUpButton"
export default function HeaderActions() {
  return (
    <div className="header-actions">
        <img width={22} src={searchIcon} alt="" />
        <img width={15} src={personIcon} alt="" />
        <SignUpButton/>
    </div>
  )
}
