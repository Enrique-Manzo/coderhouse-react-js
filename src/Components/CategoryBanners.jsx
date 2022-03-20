import "./CategoryBanners.css"
import { Link } from "react-router-dom";

export default function CategoryBanners() {

    return (

        <div className="container banner-items">
            <div className="image-row">
                <div>
                    <Link to="/category/Outdoor">
                    <img className="horizontal" src={require("../Assets/outdoor-women-banner.webp")} alt="" />
                    <p>Outdoor</p>
                    </Link>
                </div>
                <div>
                    <Link to="/category/Decoration">
                    <img className="vertical" src={require("../Assets/outdoor-vertical-banner.webp")} alt="" />
                    <p>Decorations</p>
                    </Link>
                </div>
            </div>
            <div className="banner-category-description">
                <p>
                Once you've gathered your thoughts and have a general sense of what you need, it's time to examine and decide on the different types of patio furniture available.
                </p>
            </div>



        </div>


    )
}