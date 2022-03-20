import "./ItemDetails.css"
import ItemCount from "./ItemCount";

export default function ItemDetails ({title, price, description, image, stock}) {

    return (
        <>
        <div className="products-container">
            <div>
                <img className="product-details-image" src={image} alt="" />
            </div>
            <div>
                <h2>{title}</h2>
                <p className="product-details-price">${price}</p>
                <p>{description}</p>
                <ItemCount stock={stock}></ItemCount>
            </div>
        </div>
        
        </>
    )
}