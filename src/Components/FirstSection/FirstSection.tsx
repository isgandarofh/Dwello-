import "../../css/first-section.css"
import FirstSectionImg from "./FirstSectionImg"
import FirstSectionSearch from "./FirstSectionSearch"
import FirstSectionText from "./FirstSectionText"
export default function FirstSection() {
    return (
        <div className="first-section">
            <div className="container">
                <FirstSectionText />
                <FirstSectionImg/>
            </div>
            <FirstSectionSearch/>
        </div>
    )
}
