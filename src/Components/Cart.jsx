import { useEffect, useState } from "react";
import { cartContext } from "./Contexts/CartContext";
import CounterControls from "./CounterControls";
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function CartProducts () {

    const {cartList, removeFromCart, order, createOrder, processMutate, setProcessed} = useContext(cartContext);

    const [productTotal, setProductTotal] = useState(0);

    const clickProcessed = () => {
        setProcessed(true)
    }

    useEffect(() => {        

        setProductTotal(cartList.reduce(function (a,b) { return a + (b.price * b.quantity); }, 0))

    }, [cartList])

    

    return (
        <div>
            <div className="container cart-list-container">
                <ul className="checkout-items item-titles">
                    <li>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>Quantity</p>
                    </li>
                    <li>
                        <p>Total</p>
                    </li>
                    <li>
                        <p>Remove</p>
                    </li>
                </ul>
                <ul>
                    {cartList.map(item => 
                    
                    <li className="checkout-li">
                        <div className="checkout-items">
                            <Link to={`/product/${item.id}`}>
                            <div className="checkout-product-details">
                                <img className="checkout-image" src={item.image} alt="" />
                                <p className="checkout-title">{item.title}</p>
                            </div>
                            </Link>
                            <div className="checkout-price">
                                <p>${item.price}</p> 
                            </div>
                            <div>
                                <CounterControls state={item.quantity} stock={item.stock} id={item.id} affectCart={true} item={item} />
                            </div>
                            <div>
                                <p>${(item.quantity * item.price).toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="x" onClick={()=>removeFromCart(item.id)}>X</p>
                            </div>
                        </div> 
                    </li>
                    )}
                </ul>
            </div>
            <div className="payment-container">
                <div>
                    <h3>Payment details</h3>
                </div>
                <div className="payment-totals">
                    <p>Purchase subtotal</p>
                    <p>${productTotal.toFixed(2)}</p>
                </div>
                <div className="payment-totals">
                    <p>VAT (27%)</p>
                    <p>${(productTotal * 0.27).toFixed(2)}</p>
                </div>
                <div className="payment-totals payment-totals-order">
                    <p>Order total</p>
                    <p>${(productTotal * 1.27).toFixed(2)}</p>
                </div>
                <div onClick={clickProcessed}>
                    <div className="place-order-btn">
                        <p>Continue to billing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}