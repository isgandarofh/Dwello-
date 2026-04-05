
export default function ServicesCard({img, title , subtitle} : any) {
    
    return (
        <div className="services-card">
            <div className="card-icon">
                <img src={img} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
    )
}
