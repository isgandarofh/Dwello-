import { useSelector } from "react-redux";
import AgentCard from "./AgentCard";



export default function AgentCards() {
    const { agentCardContent } = useSelector((state: any) => state.agent)
    return (
        <div className="agent-cards">
            {
                agentCardContent && agentCardContent.map((item: any) => (
                    <AgentCard 
                        key={item.id}
                        image ={item.image}
                        photo = {item.photo}
                        name = {item.name}
                        city ={item.city}
                        rating ={item.rating}
                        comment ={item.comment}
                    />
                ))
            }

        </div>
    )
}