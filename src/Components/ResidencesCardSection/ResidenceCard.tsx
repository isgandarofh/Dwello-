import Residence1 from "../../../public/img/residence1.png"
import locationIcon from "../../../public/icon/location-icon-brown.png"
import bedIcon from "../../../public/icon/bed-icon.png"
import sizeIcon from "../../../public/icon/size-icon.png"
import SignUpButton from "../Ui/SignUpButton"

type Props ={
    img : string,
    location : string,
    room: string,
    ft : string,
    price : string
}

export default function ResidenceCard({img,location,room,ft,price}:Props) {
    return (
        <div>
            <div className="residence-card">
                <div className="residence-card-img">
                    <img src={img} alt="" />
                </div>
                <div className="residence-card-text">
                    <div className="card-title">
                        <img width={18} src={locationIcon} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className="card-info">
                        <div className="room-info">
                            <img src={bedIcon} alt="" />
                            <p>{room} Rooms</p>
                        </div>
                        <div className="room-info">
                            <img src={sizeIcon} alt="" />
                            <p>{ft} sq ft</p>
                        </div>
                        <div className="card-price">
                            <p>${price}</p>
                        </div>
                    </div>
                    <SignUpButton/>
                </div>
            </div>
        </div>
    )
}
