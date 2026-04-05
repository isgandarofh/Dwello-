import { useSelector } from "react-redux";
import ServicesCard from "./ServicesCard";

export default function ServicesCards() {
  const { servicesContentArr } = useSelector((state: any) => state.services)
  return (
    <div className="services-cards">
      {
        servicesContentArr && servicesContentArr.map((item: any) => (
          <ServicesCard key={item.id} img={item.img} title={item.title} subtitle={item.subtitle} />
        ))
      }
    </div>
  )
}
