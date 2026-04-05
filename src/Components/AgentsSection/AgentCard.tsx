import starIcon from "../../../public/icon/star-icon.png"

type Props = {
  image: string,
  photo: string,
  name: string,
  city: string,
  rating: string,
  comment: string

}

export default function AgentCard({ image, photo, name, city, rating, comment }: Props) {
  return (
    <div className="agent-card">
      <div className="agent-card-img">
        <img src={image} alt="" />
      </div>
      <div className="agent-card-text">

        <div className="agent-card-user">
          <div className="user-img">
            <img src={photo} alt="" />
          </div>
          <div className="user-text">
            <h5>{name}</h5>
            <h6>{city}</h6>
          </div>
        </div>
        <div className="agent-rating">
          <img src={starIcon} alt="" />
          <h6>{rating}</h6>
        </div>

        <div className="agent-comment">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  )
}
