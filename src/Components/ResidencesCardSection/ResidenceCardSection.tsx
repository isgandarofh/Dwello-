import { useEffect } from "react"
import "../../css/residence-card-section.css"
import ResidenceCards from "./ResidenceCards"
import { getResidenceCards } from "../../services/api"
import { useDispatch } from "react-redux"
import { setResidenceContent } from "../../store/slices/residenceSlice"

export default function ResidenceCardSection() {

    const dispatch = useDispatch()

    useEffect(()=>{
        async function getResidenceData(){
            const resultData = await getResidenceCards();
            dispatch(setResidenceContent(resultData))
        }
        getResidenceData()
    },[])

  return (
    <div className="container">
        <div className="residence-card-section">
            <h3>Our Popular Residences</h3>
            <ResidenceCards/>
        </div>
    </div>
  )
}
