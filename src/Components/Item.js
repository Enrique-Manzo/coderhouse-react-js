import "./Item.css";
import { Link } from "react-router-dom";

export default function Item ({children, title, price, image, productKey}) {
    console.log(productKey)
    return (
        <Link to={`/product/${productKey}`}>
            <div className="product-presentation">
                <img className="presentation-image" src={image} />
                <div className="presentation-description">
                    <h4>{title}</h4>
                    <p>${price}</p>
                </div>
                <div>{children}</div>
            </div>
        </Link>
    )
}