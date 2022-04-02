import "./CounterControls.css";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "./Contexts/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CounterControls({state, stock, id, affectCart, item}) {

    const {addToCart, cartList, removeFromCart, reduceQuantity} = useContext(cartContext);

    const [Count, setCount] = useState(state)

    useEffect(()=>{
        setCount(item.quantity)
        
        
    }, [cartList])

    const decrease = () => {
        if (Count > 1) {
            
            reduceQuantity(item, 1);
            setCount(count => count = state);

            
        } else if (Count == 1 && affectCart) {
            removeFromCart(id);
        }
        
    };

    const increase = () => {
        if (Count < stock) {
            affectCart && addToCart(item, 1);
            setCount(count => count = state);           
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