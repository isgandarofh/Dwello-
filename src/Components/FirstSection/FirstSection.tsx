import "../../css/first-section.css"
import FirstSectionImg from "./FirstSectionImg"
import FirstSectionText from "./FirstSectionText"
export default function FirstSection() {
    return (
        <div className="first-section">
            <div className="container">
                <FirstSectionText />
                <FirstSectionImg/>
            </div>

        </div>
    )
}
