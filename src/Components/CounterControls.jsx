import "./CounterControls.css";
import { useState, useContext } from "react";
import { cartContext } from "./Contexts/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { products } from "../api/product";

export default function CounterControls({state, stock, id, affectCart}) {

    const {addToCart, cartList, removeFromCart, reduceQuantity} = useContext(cartContext);

    const [Count, setCount] = useState(state)

    const decrease = () => {
        if (Count > 1) {
            setCount(count => count - 1)

            const furnitureProduct = products.find(object => object.id == id)
            reduceQuantity(furnitureProduct, 1)
            
        } else if (Count == 1 && affectCart) {
            removeFromCart(id)
        }
        
    };

    const increase = () => {
        if (Count < stock) {
            setCount(count => count + 1)

            const furnitureProduct = products.find(object => object.id == id)
            affectCart && addToCart(furnitureProduct, 1)
            
        }
        
    };

    return (
            <div className="counter">
                <div className="decrement" onClick={decrease}><FontAwesomeIcon icon={faMinus} /></div>
                <div className="selected-qt">{Count}</div>
                <div className="increment" onClick={increase}><FontAwesomeIcon icon={faPlus} /></div>            
            </div>
    )
}