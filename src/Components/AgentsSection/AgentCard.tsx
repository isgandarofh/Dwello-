import agentHome from "../../../public/img/agent-home-img1.png"
import agentImg1 from "../../../public/img/agent-user-img1.png"
import starIcon from "../../../public/icon/star-icon.png"
export default function AgentCard() {
  return (
    <div className="agent-card">
      <div className="agent-card-img">
        <img src={agentHome} alt="" />
      </div>
      <div className="agent-card-text">

        <div className="agent-card-user">
          <div className="user-img">
            <img src={agentImg1} alt="" />
          </div>
          <div className="user-text">
            <h5>Sarah Nguyen</h5>
            <h6>San Francisco</h6>
          </div>
        </div>
        <div className="agent-rating">
          <img src={starIcon} alt="" />
          <h6>5.0</h6>
        </div>

        <div className="agent-comment">
          <p>Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</p>
        </div>
      </div>
    </div>
  )
}
