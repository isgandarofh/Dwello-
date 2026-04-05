import { useEffect } from "react"
import "../../css/agent-section.css"
import AgentCards from "./AgentCards"
import { getAgentCards } from "../../services/api"
import { useDispatch } from "react-redux"
import { setAgentCardContent } from "../../store/slices/agentSlice"



export default function AgentSection() {

    const dispatch = useDispatch()

    useEffect(() => {
        async function getAgentData() {
            const result = await getAgentCards()
            dispatch(setAgentCardContent(result))
        }
        getAgentData()
    }, [])

    return (
        <div className="agent-section">
            <div className="container">
                <div className="agent-section-title">
                    <h3>What People Say <br /> About Dwello</h3>
                </div>
                <AgentCards />
            </div>
        </div>
    )
}
