import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound () {

    return (

        <div className="container not-found-image">
            <h1>The page you are looking for doesn't exist</h1>
            <img src={require("../Assets/404-lost-dog.png")} alt="" />
            <h3><Link to="/">Go back to homepage</Link></h3>

        </div>

    )

}