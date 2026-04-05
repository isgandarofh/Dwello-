import { useSelector } from "react-redux"
import ResidenceCard from "./ResidenceCard"

export default function ResidenceCards() {
    const {residenceContent} = useSelector((state : any) => state.residence)
    return (
        <div className="residence-cards">
            {
                residenceContent && residenceContent.map((item : any)=>(
                    <ResidenceCard key={item.id} img={item.img} location={item.location} room={item.room} ft={item.ft} price={item.price} />
                ))
            }
        </div>
    )
}
