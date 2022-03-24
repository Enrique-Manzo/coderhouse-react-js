import "./CounterControls.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CounterControls({state, stock}) {

    const [Count, setCount] = useState(state)

    const decrease = () => {
        if (Count > 1) {
            setCount(count => count - 1)
        }
        
    };

    const increase = () => {
        if (Count < stock) {
            setCount(count => count + 1)
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