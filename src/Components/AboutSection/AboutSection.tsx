import "../../css/about-section.css"
import AboutSectionImg from "./AboutSectionImg"
import AboutSectionText from "./AboutSectionText"
export default function AboutSection() {
  return (
    <div className="container">
        <div className="about-section">
            <AboutSectionImg/>
            <AboutSectionText/>
        </div>
    </div>
  )
}
