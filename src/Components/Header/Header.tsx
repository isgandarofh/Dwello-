import ProjectLogo from "../Ui/ProjectLogo";
import HeaderActions from "./HeaderActions";
import HeaderMenu from "./HeaderMenu";
import "../../css/header.css"

export default function Header() {
  return (
    <header>
        <div className="header-content container">
            <ProjectLogo/>
            <HeaderMenu/>
            <HeaderActions/>
        </div>
    </header>
  )
}
