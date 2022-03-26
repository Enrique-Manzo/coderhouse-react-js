import "./ItemDetails.css"
import ItemCount from "./ItemCount";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext, cartList } from "./Contexts/CartContext";

export default function ItemDetails ({id, title, price, description, image, stock, category}) {

    const {addToCart, cartList} = useContext(cartContext);

    const [visibility, setVisibility] = useState(0);

    const onAdd = (value, quantity) => {
        setVisibility(value)
        
        addToCart({
            id: id,
            title: title,
            price: price,
            description: description,
            image: image,
            stock: stock,
            quantity: quantity
        }, quantity)
        
    }

    console.log(cartList)

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
                {
                    visibility === 0 ? <ItemCount stock={stock} action={onAdd}></ItemCount>
                    :
                    <>
                    <div className="purchase-button-rvld">
                        <Link to="/cart">
                        <button>FINISH PURCHASE</button>
                        </Link>
                    </div>
                    <div className="purchase-button-rvld">
                        <Link to={`/category/${category}`}>
                        <button>CONTINUE SHOOPPING</button>
                        </Link>
                    </div>
                    <div className="wrapper">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    </>
                }
                
            </div>
        </div>
        
        </>
    )
}