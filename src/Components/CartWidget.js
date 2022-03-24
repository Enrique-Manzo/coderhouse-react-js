import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { cartContext} from "./Contexts/CartContext";
import { useContext } from "react";

export default function CartWidget () {

    const {cartList, setCartList} = useContext(cartContext);

    return (
        <Link to="/cart">
            <div className="navbar-cart">
                <FontAwesomeIcon style={{"color": "#FD8F5F"}} icon={faCartShopping} />
                {
                    cartList.length > 0 && <p>{cartList.reduce(function (a,b) { return a + (b.quantity); }, 0)}</p>
                }
                
            </div>
        </Link>
    )
}