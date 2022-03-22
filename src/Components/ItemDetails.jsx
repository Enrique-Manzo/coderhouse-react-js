import "./ItemDetails.css"
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext, cartList } from "./Contexts/CartContext";

export default function ItemDetails ({id, title, price, description, image, stock}) {

    const {addToCart, cartList} = useContext(cartContext);

    const [visibility, setVisibility] = useState(0);

    const onAdd = (value, quantity) => {
        setVisibility(value)

        for (const product of cartList) {
            if (product.id == id) {
                product.quantity += quantity;
            }
        }

        cartList.find(object => object.id == id) == undefined &&
        addToCart({
            id: id,
            title: title,
            price: price,
            description: description,
            image: image,
            stock: stock,
            quantity: quantity
        })
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
                    visibility == 0 ? <ItemCount stock={stock} action={onAdd}></ItemCount>
                    :
                    <div className="purchase-button-rvld">
                        <Link to="/cart">
                        <button>FINISH PURCHASE</button>
                        </Link>
                    </div>
                }
                
            </div>
        </div>
        
        </>
    )
}