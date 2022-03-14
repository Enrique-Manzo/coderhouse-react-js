import "./Item.css";

export default function Item ({children, title, price, image}) {
    return (
        
        <div className="product-presentation">
            <img className="presentation-image" src={image} />
            <div className="presentation-description">
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div>{children}</div>
            
        </div>
        
    )
}