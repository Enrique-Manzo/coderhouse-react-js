import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { cartContext} from "./Contexts/CartContext";
import { useContext, useEffect, useState } from "react";

export default function CartWidget () {

    const { cartList } = useContext(cartContext);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        
        setCartCount(cartList.reduce(function (a,b) { return a + (b.quantity); }, 0))
    }, [cartList])

    return (
        <Link to="/cart">
            <div className="navbar-cart">
                <FontAwesomeIcon style={{"color": "#FD8F5F"}} icon={faCartShopping} />
                {
                    cartList.length > 0 && <p>{cartCount}</p>
                }
                
            </div>
        </Link>
    )
}