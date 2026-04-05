import "../../css/services-section.css"
import ServicesCards from "./ServicesCards"
import { getServicesContent } from "../../services/api"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setServicesContent } from "../../store/slices/servicesSlice"


export default function ServicesSection() {

    const dispatch = useDispatch();

    useEffect(()=>{
        async function getServicesData() {
            const resultServices = await getServicesContent();
            dispatch(setServicesContent(resultServices))
        }
        getServicesData()
    },[])

    
    

    return (
        <div className="container">
            <div className="services-section">
                <h3>Why Choose Us</h3>
                <p>Elevating Your Home Buying Experience with Expertise, Integrity, <br /> and Unmatched Personalized Service</p>
                <ServicesCards/>
            </div>
        </div>
    )
}
