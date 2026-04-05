import "../../css/agent-section.css"
import AgentCards from "./AgentCards"



export default function AgentSection() {
    return (
        <div className="agent-section">
            <div className="container">
                <div className="agent-section-title">
                    <h3>What People Say <br /> About Dwello</h3>
                </div>
                <AgentCards/>
            </div>
        </div>
    )
}
