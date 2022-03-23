import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function CartWidget () {
    return (
        <Link to="/cart">
        <FontAwesomeIcon style={{"color": "#FD8F5F"}} icon={faCartShopping} />
        </Link>
    )
}