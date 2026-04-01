import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
        <ul>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={''}>Service</Link></li>
            <li><Link to={''}>Agents</Link></li>
            <li><Link to={''}>Contact</Link></li>
        </ul>
    </div>
  )
}
