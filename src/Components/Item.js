import "./Item.css";
import { Link } from "react-router-dom";

export default function Item ({children, title, category, price, image, productKey}) {
    
    return (
        <Link to={`/product/${productKey}`}>
            <div className="product-presentation">
                <img className="presentation-image" src={image} />
                <div className="presentation-description">
                    <p className="item-category">{category}</p>
                    <h4>{title}</h4>
                    <div className="price-tag-container">
                        <p className="price-tag">${price}</p>
                    </div>
                    
                </div>
                <div>{children}</div>
            </div>
        </Link>
    )
}