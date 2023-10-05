import { Link } from "react-router-dom";
import './accessButton.css'

export default function AcessButton({text, to}){
    return(
        <button className="accessButton">
            <Link to={to}>{text}</Link>
        </button>
    )
}